var App = Ember.Application.create({});

App.Router.map(function() {
   this.resource('contact');
});

App.GravatarImageComponent = Ember.Component.extend({
    size: 200,
    email: '',

    gravatarUrl: function() {
        var email = this.get('email'),
            size = this.get('size');

        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
    }.property('email', 'size')
});