import moment from 'moment';

/**
 * 
 * @param {string or array of strings} fieldName 
 * @param {string} filter 
 * @param {array} arrayForFiltration 
 */
export function filterByText(fieldName, filter, arrayForFiltration) {
  const filteredByText = arrayForFiltration.filter(el => {
    let field;
    if(Array.isArray(fieldName)){
      fieldName.forEach(deep =>{
        if(field){
          field = field[deep]
        }else{
          field = el[deep]
        }
      })
    }else{
      field = el[fieldName]
    }
    const result = field.toLocaleLowerCase().search(filter.toLocaleLowerCase());
    if (result !== -1) {
      return true
    }
    return false
  });
  return filteredByText;
}
/**
 * 
 * @param {string or array of strings} fieldName 
 * @param {1 && 2} filter 
 * @param {array} arrayForFiltration 
 */
export function filterByStatus(fieldName, filter, arrayForFiltration) {
  const convertStatusFilter = (filter === 1);
  const filteredByStatus = arrayForFiltration.filter(el => {
    let field;
    if(Array.isArray(fieldName)){
      fieldName.forEach(deep =>{
        if(field){
          field = field[deep]
        }else{
          field = el[deep]
        }
      })
    }else{
      field = el[fieldName]
    }
    if (field === convertStatusFilter) {
      return true
    }
    return false
  });
  return filteredByStatus;
}
/**
 * 
 * @param {string} fieldName 
 * @param {number} filter 
 * @param {array} arrayForFiltration 
 */
export function filterByNubmer(fieldName, filter, arrayForFiltration) {
  const filteredByNumber = arrayForFiltration.filter(el => {
    let field;
    if(Array.isArray(fieldName)){
      fieldName.forEach(deep =>{
        if(field){
          field = field[deep]
        }else{
          field = el[deep]
        }
      })
    }else{
      field = el[fieldName]
    }
    if(!isNaN(filter)){
      const stringField = '' + field;
      const result = stringField.search(filter);
      if (result != -1) {
        return true
      }
      return false
    }
    return false
  })
  return filteredByNumber;
}

/**
 * 
 * @param {string} fieldName 
 * @param {date} filter 
 * @param {array} arrayForFiltration 
 * @param {from && to} direction 
 */
export function filterByData(fieldName, filter, arrayForFiltration, direction){
  const filteredByDate = arrayForFiltration.filter(el => {
    let field;
    if(Array.isArray(fieldName)){
      fieldName.forEach(deep =>{
        if(field){
          field = field[deep]
        }else{
          field = el[deep]
        }
      })
    }else{
      field = el[fieldName]
    }
    if(moment(filter).isValid()){
      if(direction === 'from'){
        if(moment(field) > moment(filter)){
          return true
        }
        return false
      }
      if(direction === 'to'){
        if(moment(field) < moment(filter)){
          return true
        }
        return false
      }
    }
    return false
  })
  return filteredByDate;
}

/**
 * 
 * @param {string} fieldName 
 * @param {1 && 2} filter 
 * @param {array} arrayForFiltration 
 */
export function filterByField(fieldName, filter, arrayForFiltration) {
  const convertStatusFilter = (filter === 1);
  const filteredByStatus = arrayForFiltration.filter(el => {
    const field = el[fieldName];
    if (!field && !convertStatusFilter) {
      return true
    }else if(field && convertStatusFilter){
      return true
    }
    return false
  });
  return filteredByStatus;
}