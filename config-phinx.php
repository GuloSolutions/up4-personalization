
<?php
return [
  'paths' => [
    'migrations' => plugins_url() . '/facebook-social/app/Migration/migrations/'
  ],
  'migration_base_class' => '\Backend\Migration\Migration',
  'environments' => [
    'default_migration_table' => 'phinxlog',
    'default_database' => 'up4-probiotics',
    'dev' => [
          'adapter' => 'mysql',
          'host'      => 'localhost',
          'name'  => 'up4-probiotics',
          'user'  => 'up4-probiotics',
          'pass'  => 'Sn5xd9GZjrzLP1Pq',
          'charset'   => 'utf8',
          'collation' => 'utf8_unicode_ci'
    ]
  ]
];
