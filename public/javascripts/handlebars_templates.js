this["JST"] = this["JST"] || {};

this["JST"]["album/album"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/albums/edit/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"edit\" data-type=\"edit\">edit</a><a href=\"#\" id=\"delete\" data-type=\"delete\" data-target=\"/albums/delete/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">delete</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = "";

  stack1 = ((helper = (helper = helpers.admin || (depth0 != null ? depth0.admin : depth0)) != null ? helper : alias2),(options={"name":"admin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.admin) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\" alt=\"cover\"><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><p>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p><a href=\"#\" class=\"button\" id=\"add_to_cart\"><img src=\"/images/ca.png\" alt=\"add\"></a>";
},"useData":true});

this["JST"]["album/edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>Edit Album: "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><form action=\"/albums/edit/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" method=\"put\"><fieldset><dl><dt><label for=\"date\">Date</label></dt><dd><input id=\"date\" name=\"date\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" required/></dd><dt><label for=\"cover\">Cover</label></dt><dd><input id=\"cover\" name=\"cover\" type=\"url\" placeholder=\"cover link\" value=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\" /></dd><dt><label for=\"name\">Artist</label></dt><dd><input id=\"artist\" name=\"artist\" type=\"text\" placeholder=\"artist name\" value=\""
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "\" required/></dd><dt><label for=\"title\">Title</label></dt><dd><input id=\"title\" name=\"title\" type=\"text\" placeholder=\"album title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" required/></dd><dt><label for=\"price\">Price</label></dt><dd><input id=\"price\" name=\"price\" type=\"text\" placeholder=\"album price\" value=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" required/></dd></dl></fieldset><fieldset class=\"actions\"><input id=\"update\" class=\"button\" type=\"submit\" name=\"update\" value=\"update\"><a href=\"/\" class=\"button\" id=\"cancel\">Cancel</a></fieldset></form>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h1>There is no such page</h1>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.admin || (depth0 != null ? depth0.admin : depth0)) != null ? helper : alias2),(options={"name":"admin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.admin) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.notAdmin || (depth0 != null ? depth0.notAdmin : depth0)) != null ? helper : alias2),(options={"name":"notAdmin","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.notAdmin) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["JST"]["album/new"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<h1>Add Album</h1><form action=\"/albums\" method=\"post\"><fieldset><dl><dt><label for=\"date\">Date</label></dt><dd><input id=\"date\" name=\"date\" type=\"date\" required/></dd><dt><label for=\"cover\">Cover</label></dt><dd><input id=\"cover\" name=\"cover\" type=\"url\" placeholder=\"cover link\"/></dd><dt><label for=\"artist\">Artist</label></dt><dd><input id=\"artist\" name=\"artist\" type=\"text\" placeholder=\"artist name\" required/></dd><dt><label for=\"title\">Title</label></dt><dd><input id=\"title\" name=\"title\" type=\"text\" placeholder=\"album title\" required/></dd><dt><label for=\"price\">Price</label></dt><dd><input id=\"price\" name=\"price\" type=\"text\" placeholder=\"album price\" required/></dd></dl></fieldset><fieldset class=\"actions\"><input id=\"create\" class=\"button\" type=\"submit\" name=\"create\" value=\"Create\"><a href=\"/\" class=\"button\" id=\"cancel\">Cancel</a></fieldset></form>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h1>There is no such page</h1>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.admin || (depth0 != null ? depth0.admin : depth0)) != null ? helper : alias2),(options={"name":"admin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.admin) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.notAdmin || (depth0 != null ? depth0.notAdmin : depth0)) != null ? helper : alias2),(options={"name":"notAdmin","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.notAdmin) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["JST"]["cart/cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label for=\"cart_toggle\">"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " items</label><input type=\"checkbox\" id=\"cart_toggle\"><div id=\"items\"><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><p>$"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</p><section><a href=\"#\" id=\"empty\">empty</a></section></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><span id=\"remove\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">X</span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " x "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "<small>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</small></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>0 items</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/albums/new\" class=\"button\" id=\"new\">+</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.admin || (depth0 != null ? depth0.admin : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"admin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.admin) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<h1>Albums</h1><span></span><ul></ul>";
},"useData":true});

this["JST"]["user/login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Log in</h1><form action=\"/users/login\" method=\"post\"><fieldset><dl><dt><label for=\"username\">Username</label></dt><dd><input id=\"username\" type=\"text\" name=\"username\" placeholder=\"Username\" required><input type=\"submit\" hidden></dd><dt><label for=\"password\">Password</label></dt><dd><input id=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" required><input type=\"submit\" hidden></dd></dl></fieldset><fieldset class=\"actions\"><input id=\"login\" class=\"button\" type=\"submit\" name=\"login\" value=\"login\"><a href=\"/\" class=\"button\" id=\"cancel\">Cancel</a></fieldset><h3>Have no account?</h3><fieldset class=\"actions\"><a href=\"/users/signup\" class=\"button\" id=\"signup\">Sign Up</a> </fieldset></form>";
},"useData":true});

this["JST"]["user/signup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Sign Up</h1><form action=\"/users/signup\" method=\"post\"><fieldset><dl><dt><label for=\"username\">Username</label></dt><dd><input id=\"username\" type=\"text\" name=\"username\" placeholder=\"Username\" required><input type=\"submit\" hidden></dd><dt><label for=\"password\">Password</label></dt><dd><input id=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" required><input type=\"submit\" hidden></dd></dl></fieldset><fieldset class=\"actions\"><input id=\"signup\" class=\"button\" type=\"submit\" name=\"signup\" value=\"signup\"><a href=\"/\" class=\"button\" id=\"cancel\">Cancel</a></fieldset><h3>Already have an account?</h3><fieldset class=\"actions\"><a href=\"/users/login\" class=\"button\" id=\"login\">Login</a> </fieldset></form>";
},"useData":true});

this["JST"]["user/user"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li><a href=\"#\">Hi, "
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "</a></li><li><a id=\"logout\" href=\"#\" data-type=\"post\" data-target=\"/users/logout\">Log Out</a></li>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<li><a href=\"/users/login\">Login</a></li><li><a href=\"/users/signup\">Sign Up</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.username : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});