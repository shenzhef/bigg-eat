import { useMemo } from 'react';
import { get, toString } from 'lodash';
import { useContentManagerEditViewDataManager } from 'strapi-helper-plugin';

function useSelect({ schema, componentFieldName }) {
  const {
    checkFormErrors,
    modifiedData,
    moveComponentField,
    removeRepeatableField,
    triggerFormValidation,
  } = useContentManagerEditViewDataManager();

  // update 1
  // read options.mainField and then fallback settings.mainField
  console.log('entra?');
  const mainField = useMemo(
    () => {
      return get(schema, ['options', 'nombre']) || get(schema, ['settings', 'nombre'], 'id');
    },
    [schema]
  );

  // update 2
  // mainField need split
  const displayedValue = toString(
    get(modifiedData, [...componentFieldName.split('.'), ...mainField.split('.')], '')
  );

  return {
    displayedValue,
    mainField,
    checkFormErrors,
    moveComponentField,
    removeRepeatableField,
    schema,
    triggerFormValidation,
  };
}

export default useSelect;