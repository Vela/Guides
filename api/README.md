APIs
====

A guide for designing APIs.

JSON
----

* Use JSON for API request and response bodies.
* Use `snake_case` for JSON keys, not `camelCase`.
* Use `ActiveModel::Serializers` for APIs served by Rails.

REST
----

* Prefer RESTful "resources".
* Use the appropriate [HTTP verb].
* `GET`, `DELETE`, and `PUT` requests should be [idempotent].
* `GET` requests should have no side effects.

[HTTP verb]: http://www.restapitutorial.com/lessons/httpmethods.html
[idempotent]: http://www.restapitutorial.com/lessons/idempotency.html

URIs
----

* Use `:only` to whitelist the routes that are exposed for a resource.
```ruby
resources :users, only: [:index, :show]
```
* Use namespaces to logically group API functions.
* Prefer [shallow nesting] of resources.

[shallow nesting]: http://guides.rubyonrails.org/routing.html#shallow-nesting

Localization
------------

* Use the `Accept-Language` HTTP header.

Errors
------

* Use the appropriate [HTTP status code] to indicate the error to the client.
* Include any applicable error messages in the response body:
```JavaScript
{
  errors: ["First name is required", "Date of birth is required"]
}
```
```JavaScript
{
  errors: ["This example just has one error, but we wrap it in 'errors' for consistency."]
}
```

[HTTP status code]: http://www.restapitutorial.com/httpstatuscodes.html

Versioning
----------

* TBD when we need to version an API.

Deprecations
------------

* TBD when we need to deprecate an API.
