Package.describe({
  name: 'skt:bootstraptreeview',
  version: '0.1.0',
  summary: 'Meteor package wrapper for bootstrap-treeview.js v1.2.0',
  git: 'https://github.com/sekmet/meteor-bootstraptreeview.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.addFile('bootstrap-treeview.css', 'client');
  api.mainModule('bootstrap-treeview.js', 'client');
});
