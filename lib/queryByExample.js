/*!
 * Copyright 2026 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import {toJsonPointerMap} from './util.js';

export function exampleToJsonPointerMap({example} = {}) {
  return toJsonPointerMap({obj: example, flat: false});
}
