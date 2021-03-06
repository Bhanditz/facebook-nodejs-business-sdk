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
 * WithAsset3D
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WithAsset3D extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id'
    });
  }

  get (fields, params): WithAsset3D {
    return this.read(
      fields,
      params
    );
  }
}
