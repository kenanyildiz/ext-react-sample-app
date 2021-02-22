/* global Ext, hello, store, $, _ */

Ext.define("hello.Main", {
  html: "Hello World!",
  referenceHolder: true,
  reference: 'HelloWorldView',
  extend: 'Ext.panel.Panel',
  alias: 'widget.fooHelloWorld',
  xtype: 'helloworld',
});