import type { Schema, Attribute } from '@strapi/strapi';

export interface UserUser extends Schema.Component {
  collectionName: 'components_user_users';
  info: {
    displayName: 'user';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.user': UserUser;
    }
  }
}
