/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * EntityAtTextRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EntityAtTextRange extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      length: 'length',
      name: 'name',
      object: 'object',
      offset: 'offset',
      type: 'type'
    });
  }

  static get Type (): Object {
    return Object.freeze({
      user: 'user',
      page: 'page',
      event: 'event',
      group: 'group',
      application: 'application'
    });
  }
}
