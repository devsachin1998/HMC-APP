import {apiFunctions} from './utils';
import xml2js from 'react-native-xml2js';

export const makeApiCall = async (endpoint, method, body = null) => {
  console.log('api', endpoint, method, body);
  const apiUrl = `${apiFunctions.url}${endpoint}`;
  console.log(apiUrl);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  const options = {
    method: method,
    headers: headers,
  };
  if (body) {
    options.body = body;
  }
  try {
    const response = await fetch(apiUrl, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
};
export const makeApiCallxml  = async (endpoint, method, url = "base") => {
  let apiUrl = "";
  if(url=="base")
    {
      apiUrl = `${apiFunctions.urlbasic}${endpoint}`;

    }
    else  if(url=="admin")
    {
       apiUrl = `${apiFunctions.urladmin}${endpoint}`;

    }
    else  if(url=="web")
      {
         apiUrl = `${apiFunctions.urlweb}${endpoint}`;
  
      }
  console.log(apiUrl);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  const options = {
    method: method,
    // headers: headers,
  };
  
  try {
    console.log("Api:::::", options,apiUrl);

    const response = await fetch(apiUrl, options);
    const responseData = await response.text();

    // Parse XML data
    const parsedData = await new Promise((resolve, reject) => {
      xml2js.parseString(responseData, { explicitArray: false, explicitRoot: false }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const tables = result['diffgr:diffgram'].NewDataSet;
          // console.log("tables:::::11", tables);
          resolve(tables);
        }
      });
    });

    return parsedData;
  } catch (error) {
    console.error(error);
    return null; // Handle error appropriately
  }
};
export const makeApiCallxmlimage  = async (endpoint, method, url = "base",body) => {
  let apiUrl = "";
  if(url=="base")
    {
      apiUrl = `${apiFunctions.urlbasic}${endpoint}`;

    }
    else  if(url=="admin")
    {
       apiUrl = `${apiFunctions.urladmin}${endpoint}`;

    }
    else  if(url=="web")
      {
         apiUrl = `${apiFunctions.urlweb}${endpoint}`;
  
      }
  console.log(apiUrl);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const options = {
    method: method,
    headers: headers,
    body: body,

  };
  
  try {
    console.log("Api:::::", options);
    const response = await fetch(apiUrl, options);
    const responseData = await response.text();
    console.log("Api:::::", responseData,response);

    // Parse XML data
    const parsedData = await new Promise((resolve, reject) => {
      xml2js.parseString(responseData, { explicitArray: false, explicitRoot: false }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const tables = result['diffgr:diffgram'].NewDataSet;
          console.log("tables:::::11", tables);
          resolve(tables);
        }
      });
    });

    return parsedData;
  } catch (error) {
    console.error(error);
    return null; // Handle error appropriately
  }
};


