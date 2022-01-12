/**
 * File: utils.js
 * Project: medium-unlocker
 * File Created: 23 Dec 2021 11:12:59
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Dec 2021 21:10:11
 * Modified By: und3fined (me@und3fined.com)
 * -----
 * Copyright (c) 2021 und3fined.com
 */
const uIdPattern = '0123456789abcdef';
const sIdPattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._/';

function generateId(length, characters) {
  let result = '';
  let charsLen = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charsLen));
  }

  return result;
}

exports.generateUID = () => {
  return `lo_${generateId(12, uIdPattern)}`;
}

exports.generateSID = () => {
  return `1:${generateId(64, sIdPattern)}`
}

exports.getBeforeSendExtraInfoSpec = () => {
  const extraInfoSpec = ["blocking", "requestHeaders"];
  if (
    chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS")
  ) {
    extraInfoSpec.push("extraHeaders");
  }
  return extraInfoSpec;
}

exports.getHeaders = (headers, headerName, condition) => {
  return headers.filter(({ name }) => condition(name.toLowerCase(), headerName));
}

exports.hasElm = (elm) => {
  return !!document.getElementById(elm);
}