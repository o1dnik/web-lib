import React from "react"
import { FormattedMessage } from "react-intl"
import isObject from "lodash/isObject"

export function extractErrorMessage(message) {
  if (isObject(message) && message.id) {
    return <FormattedMessage {...message} />
  }

  return message
}
