import { gql } from '@apollo/client'

export const CUSTOMER_CREATE = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
export const CUSTOMER_LOGIN = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_ACTIVATE = gql`
  mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {
    customerActivate(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`
export const CUSTOMER_RECOVER = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_RESET = gql`
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`

export const CUSTOMER_ADDRESS_CREATE = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const TRIGGER_PIPEDREAM_EVENT = gql`
  mutation TriggerPipedreamEvent($_id: String!) {
    triggerPipedreamEvent(_id: $_id) {
      id
      success
      message
    }
  }
`;
export const ADD_BAG = gql`
  mutation AddBag($brand: String!, $size: String!, $condition: String!, $serialNum: String!, $material: String!, $model: String!,  $images: [Upload!]) {
    addBag(brand: $brand, size: $size, condition: $condition, serialNum: $serialNum, material: $material, model: $model, images: $images) {
      brand
      size
      condition
      serialNum
      material
      model
      confirmationNum
    }
  }
`
