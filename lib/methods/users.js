/*'use strict';

/**
 * Required modules.
 */
var query = require('../query')
  , Logger = require('devnull')
  , log = new Logger({ timestamp: false });

/**
 * Gets the answers to a set of users identified in [ids].
 *
 * @param {Object} criteria
 * @param {Array} ids collection of IDs
 * @param {Function} callback return results
 * @api public
 
function answers (criteria, ids, callback) {
  if (!ids || !ids.length) return log.error('users.answers lacks IDs to query');
  query('users/' + ids.join(';') + '/answers', criteria, callback);
}

// Expose commands.
module.exports.answers = answers;*/

'use strict';

/**
 * Required modules.
 */
var query = require('../query')
  , post = require('../post')
  , Logger = require('devnull')
  , log = new Logger({ timestamp: false });


/**
 * Gets all the questions on the site or returns the questions identified in [ids].
 *
 * @param {Object} criteria
 * @param {Function} callback return results
 * @param {Array} ids collection of IDs
 * @api public
 */
function questions (criteria, callback, ids) {
  ids = ids || [];
  query('questions/' + ids.join(';'), criteria, callback);
}

modules.exports.users=users;
