import React from 'react';

interface AnyObject {
  [k: string]: any;
}

interface ValidOptions {
  /**
   * The field value that is to be validated.
   */
  value: string | number | boolean | RegExp;
  /**
   * The error message to be displayed.
   */
  message: string;
}

interface ValidationOptions {
  maxLength?: ValidOptions;
  minLength?: ValidOptions;
  matches?: ValidOptions;
  required?: ValidOptions;
}

interface ValidationOptionsObject {
  [k: string]: ValidationOptions;
}

const useForm = <T extends AnyObject>(
  initialValues: T,
  validationOptionsObject: ValidationOptionsObject
) => {
  const [values, setValues] = React.useState<T>(initialValues);
  // @ts-ignore
  const [errors, setErrors] = React.useState<T>({});
  const [validationObject] = React.useState(validationOptionsObject);

  React.useEffect(() => {
    const tempState: any = {};

    Object.keys(initialValues).forEach((s: string) => {
      tempState[s] = '';
    });

    setErrors(tempState);
  }, []);

  const validate = (name: string, value: string) => {
    const validationArray = Object.keys(validationOptionsObject[name]).map(
      (s: string) => s
    );

    if (validationArray.includes('maxLength')) {
      const maxLength = validationObject[name]?.maxLength?.value;

      if (value.trim().length > (maxLength as number)) {
        setErrors(prev => ({
          ...prev,
          [name]: validationObject[name]?.maxLength?.message,
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
      }
    }

    if (validationArray.includes('minLength')) {
      const minLength = validationObject[name]?.minLength?.value;

      if (value.trim().length < (minLength as number)) {
        setErrors(prev => ({
          ...prev,
          [name]: validationObject[name]?.minLength?.message,
        }));
      } else {
        const maxLength = validationObject[name]?.maxLength?.value;
        const maxLengthMessage = validationObject[name]?.maxLength?.message;

        if (value.trim().length > (maxLength as number)) {
          setErrors(prev => ({
            ...prev,
            [name]: maxLengthMessage,
          }));
        } else {
          setErrors(prev => ({
            ...prev,
            [name]: '',
          }));
        }
      }
    }

    if (validationArray.includes('matches')) {
      const pattern = validationObject[name]?.matches?.value as RegExp;

      if (!pattern.test(value) && value.trim().length) {
        setErrors(prev => ({
          ...prev,
          [name]: validationObject[name]?.matches?.message,
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
      }
    }

    if (validationArray.includes('required')) {
      if (!value.trim().length) {
        setErrors(prev => ({
          ...prev,
          [name]: validationObject[name]?.required?.message,
        }));
      }
      if (!validationArray.includes('minLength'))
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validate(name, value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validate(name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };
  const setError = (property: keyof T, errorMessage: string) => {
    setErrors(prev => ({
      ...prev,
      [property]: errorMessage,
    }));
  };

  return {
    errors,
    handleBlur,
    handleChange,
    setError,
    values,
  };
};

export default useForm;
