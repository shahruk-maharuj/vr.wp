<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'FFdTGe/MMJyGODlfpv+Yq6Oji6QxIL2IbdjJ6tavU2mitRHlKyNktaPC1kzIp0DIalTGebKpB15ujlm92U6/Iw==');
define('SECURE_AUTH_KEY',  'PNgBSxlT0W/bEJMezj11H9Dd9OxQZFqZ9dopuYO+kIfpORL2WVGhRB/pSm40v82E/Av4tvpjmesKqUaqaZpm+w==');
define('LOGGED_IN_KEY',    'MdL0k2vjrzdi688tHVDeqDU+M3nNsURMRsgE2WsAPsjwzcT1Co8QfT6mDZ4XUavng0Lv4ppOYYTE3UTfIdBuMg==');
define('NONCE_KEY',        'yX5UM6c8pPdhk8WnXVO5qeOlciba5CeF732zhDEGT3Qm16nwiiyhCidbe0vwpflJ2YE2/N8ctTIYjpS+SY3SjA==');
define('AUTH_SALT',        'iavkkpdAcky2vyKz477N6cYKfFXtsYZJNRXl/QVAT4iYxmVkIEkn1X0txmchHs5mygU4+nrEiQ7Lg7JTJv/zLA==');
define('SECURE_AUTH_SALT', 'Bkbh3SbwKtjKY8CWEFb+2pqXTsDIZp+XHhbcVKl9Wn7fRu+KK5jN6jcdBWapMpJaQ26or6wS57RxkcFtAlZmxA==');
define('LOGGED_IN_SALT',   'aNE3b+2GvELzdrKPV1gHC4gQ2hFuSI1cMV8uz9kxIPGGlXThAJMH1g0Ebr3SwkwEvqq7LKtbREOyPeKSiWAC1Q==');
define('NONCE_SALT',       'eWYOMIZIMVu7fckLYqB8SbjXkcBRc5WHCj7eRcoNU15iZtOw9eyLmp0l5fw4+b8kwuYbhV8iufzDKn5ZCvksaQ==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
