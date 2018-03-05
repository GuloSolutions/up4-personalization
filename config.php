<?php
return [
  'paths' => [
    'migrations' => 'app/Migration/migrations'
  ],
  'migration_base_class' => 'app/Migrations/Migration',
  'environments' => [
    'default_migration_table' => 'phinxlog',
    'default_database' => DB_NAME,
    'development' => [
          'adapter' => 'mysql',
          'host'    => defined('DB_HOST') && !empty(DB_HOST) ? DB_HOST : 'localhost',
          'name'    => defined('DB_NAME') && !empty(DB_NAME) ? DB_NAME : 'up4-probiotics',
          'user'    => defined('DB_USER') && !empty(DB_USER) ? DB_USER : 'up4-probiotics',
          'pass'    => defined('DB_PASSWORD') && !empty(DB_PASSWORD) ? DB_PASSWORD : 'Sn5xd9GZjrzLP1Pq',
          'charset' => defined('DB_CHARSET') && !empty(DB_CHARSET) ? DB_CHARSET : 'utf8',
          'collation' => defined('DB_COLLATE') && !empty(DB_COLLATE) ? DB_COLLATE : 'utf8_unicode_ci',
    ]
  ]
];
