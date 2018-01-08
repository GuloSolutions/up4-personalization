
<?php
return [
  'paths' => [
    'migrations' => 'app/Migration/migrations'
  ],
  'migration_base_class' => 'app/Migrations/Migration',
  'environments' => [
    'default_migration_table' => 'phinxlog',
    'default_database' => 'DB_NAME',
    'development' => [
          'adapter' => 'mysql',
          'host'      => 'localhost',
          'name'  => 'DB_NAME',
          'user'  => 'DB_USER',
          'pass'  => 'DB_PASSWORD',
          'charset'   => 'utf8',
          'collation' => 'utf8_unicode_ci'
    ]
  ]
];
