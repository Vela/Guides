Style
=====

A guide for programming in style.

Git
---

* Avoid merge commits by using a [rebase workflow].
* Prefix feature branch names with your initials.
* Squash multiple trivial commits into a single commit.
* Write a [good commit message].

[rebase workflow]: https://github.com/thoughtbot/guides/tree/master/protocol/git#merge
[good commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

Formatting
----------

* Avoid inline comments.
* Break long lines after 80 characters.
* Delete trailing whitespace. Your editor should be configured to do so automatically:
  * [Sublime Text](http://nategood.com/sublime-text-strip-whitespace-save)
  * [Vim](http://vim.wikia.com/wiki/Remove_unwanted_spaces)
  * [Atom](https://github.com/atom/whitespace)
* Don't include spaces after `(`, `[` or before `]`, `)`.
* Don't misspell.
* Don't vertically align tokens on consecutive lines.
* If you break up an argument list, keep the arguments on their own lines and
  closing parenthesis on its own line.
* If you break up a hash, keep the elements on their own lines and closing curly
  brace on its own line.
* Indent continued lines two spaces.
* Indent private methods equal to public methods.
* If you break up a chain of method invocations, keep each method invocation on
  its own line. Place the `.` at the end of each line, except the last.
  [Example][dot guideline example].
* Use 2 space indentation (no tabs).
* Use an empty line between methods.
* Use empty lines around multi-line blocks.
* Use spaces around operators, after commas, after colons and semicolons, around
  `{` and before `}`.
* Use [Unix-style line endings] (`\n`).
* Use [uppercase for SQL key words and lowercase for SQL identifiers].

[dot guideline example]: https://github.com/thoughtbot/guides/blob/master/style/samples/ruby.rb#L11
[uppercase for SQL key words and lowercase for SQL identifiers]: http://www.postgresql.org/docs/9.2/static/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
[Unix-style line endings]: http://unix.stackexchange.com/questions/23903/should-i-end-my-text-script-files-with-a-newline

File Names
----------

* Separate words using underscores, not dashes (`user_settings.coffee`, not `user-settings.coffee`)
* Avoid multiple filetypes (`user_settings.coffee`, not `user_settings.js.coffee`)

Naming
------

* Avoid abbreviations.
* Avoid object types in names (`user_array`, `email_method` `CalculatorClass`, `ReportModule`).
* Name the enumeration parameter the singular of the collection.
* Name variables, methods, and classes to reveal intent.
* Treat acronyms as words in names (`XmlHttpRequest` not `XMLHTTPRequest`),
  even if the acronym is the entire name (`class Html` not `class HTML`).
* Name variables holding a factory with `_factory` (`user_factory`).
* Name variables created by a factory after the factory (`user_factory`
  creates `user`).

Organization
------------

* Order methods so that caller methods are earlier in the file than the methods
  they call.
* Order methods so that methods are as close as possible to other methods they
  call.

JavaScript
----------

* Prefer CoffeeScript for new and refactored code.
* Prefer Angular for new code.
* Actively replace Prototype.js code with jQuery, where possible, while working on new features or refactoring.

### AJAX
* Prefer Angular `$http` or `$resource` when in Angular code.
* Avoid direct use of `$http` in Angular controllers—extract the requests to service objects instead.
* Prefer jQuery everywhere else.
* Don't use Prototype.js methods.

[Sample](/samples/javascript.js#L1)

### Data Manipulation
* Prefer [Angular](https://docs.angularjs.org/api) methods over [Underscore](http://underscorejs.org/) when in Angular code.
* Prefer [Underscore](http://underscorejs.org/) methods over jQuery.
* Don't use Prototype.js methods.

[Sample](/samples/javascript.js#L22)

### Angular

* Module declarations should be both readable and concise

[Sample](/samples/coffeescript.coffee#L1)

### CoffeeScript

* Avoid conditional modifiers (lines that end with conditionals).
* Break up long lines with trailing dot-notation
```JavaScript
# bad
$http.get("/api/route", params).success(successHandler).error(errorHandler)

# good
$http.get("/api/route", params).
  success(successHandler).
  error(errorHandler)
```
* Initialize arrays using `[]`.
* Initialize empty objects and hashes using `{}`.
* Use hyphen-separated filenames, such as `coffee-script.coffee`.
* Use `PascalCase` for classes, `lowerCamelCase` for variables and functions,
  `SCREAMING_SNAKE_CASE` for constants, `_single_leading_underscore` for
  private variables and functions.
* Prefer `==` and `!=` to `is` and `isnt`.
* Prefer `||` and `&&` to `or` and `and`.
* Prefer `!` over `not`.
* Prefer `@` over `this` for referencing instance properties.
* Prefer double quotes.

Sass
----
### Formatting
* Use the *Scss* syntax.
* Use hyphens when naming mixins, extends, classes, functions & variables: `span-columns` not `span_columns` or `spanColumns`.
* Use space between property and value: `width: 20px` not `width:20px`.
* Use a blank line above selector that has styles.
* Prefer hex color codes `#000`.
* Use `//` for comment blocks not `/* */`.
* Use a space between selector and `{`.
* Use double quotation marks.
* Use only lowercase, including colors.
* Don't add a unit specification after `0` values, unless required by a mixin.
* Use space around operands: `$variable * 1.5`, not `$variable*1.5`
* Avoid in-line operations in shorthand declarations (Ex. `padding: $variable * 1.5 variable * 2`)
* Use parentheses around individual operations in shorthand declarations: `padding: ($variable * 1.5) ($variable * 2)`

### Order
* Use alphabetical order for declarations.
* Declarations with directions (`border-top`, `border-right`) should be grouped clock-wise from `top`.
* `top`, `right`, `bottom`, `left` should be grouped after the alphabetized list.
* Place @extends and @includes at the top of your declaration list.
* Place media queries directly after the declaration list.
* Place concatenated selectors second.
* Place pseudo states and elements third.
* Place nested selectors last.

### Selectors
* Don't use ID's for style.
* Use meaningful names: `$visual-grid-color` not `$color` or `$vslgrd-clr`.
* Use ID and class names that are as short as possible but as long as necessary.
* Avoid using the direct descendant selector `>`.
* Avoid nesting more than 4 selectors deep.
* Don't nest more than 6 selectors deep.
* Use HTML tags on vague classes that need a qualifier like `header.application` not `.main`.
* Avoid using the HTML tag in the class name: `section.news` not `section.news-section`.
* Avoid using HTML tags on classes for generic markup `<div>`, `<span>`: `.widgets` not `div.widgets`.
* Avoid using HTML tags on classes with specific class names like `.featured-articles`.
* Avoid using comma delimited selectors.
* Avoid nesting within a media query.

### Organization
* Use Bourbon for a Sass Library.
* Use Neat for a grid framework.
* Use Bitters / Base folder for style on HTML tags, global variables, global extends and global mixins.
* Use Normalize as a browser reset.
* Use HTML structure for ordering of selectors. Don't just put styles at the bottom of the Sass file.
* Prefer the same file structure that is found in app/views.
* Avoid having files longer than 100 lines.

Ruby
----

### Sandi Metz's Rules

These should be treated as strong guidelines for new code and a goal to refactor towards for existing code. See [thoughtbot's article](http://robots.thoughtbot.com/sandi-metz-rules-for-developers) for a good discussion of these rules. If you're going to break them, you need to have a good reason, which should be discussed with the team in your pull request. 

1. Classes can be no longer than one hundred lines of code.
2. Methods can be no longer than five lines of code.
3. Pass no more than four parameters into a method. Hash options are parameters.
4. Controllers can instantiate only one object. Therefore, views can only know about one instance variable and views should only send messages to that object (@object.collaborator.value is not allowed).

### Ruby Style

The below points contribute to uniform code that is easy to read, but remember that these are the low-hanging fruit of writing good code. When reviewing others' pull requests, if they are in violation of one of Sandi Metz's Rules, keep the discussion centered on how to fix that rather than around stylistic elements. 

It's easy and low value to point out a that `&:method_name` should be used instead of `{ |item| item.method_name }`; it's much higher value (and more challenging) to discuss how to break up a class that has grown to have too much responsibility.

[Sample](samples/ruby.rb)

* Avoid conditional modifiers (lines that end with conditionals).
* Avoid multiple assignments per line (`one, two = 1, 2`).
* Avoid organizational comments (`# Validations`).
* Avoid ternary operators (`boolean ? true : false`). Use multi-line `if`
  instead to emphasize code branches.
* Break up long lines with trailing dot-notation
```Ruby
# bad
User.includes(includes).where(account_id: @project.account_id).order("first_name ASC")

# good
User.includes(includes).
  where(account_id: @project.account_id).
  order("first_name ASC")
```
* Avoid explicit return statements.
* Avoid using semicolons.
* Avoid bang (!) method names. Prefer descriptive names.
* Don't use `self` explicitly anywhere except class methods (`def self.method`)
  and assignments (`self.attribute =`).
* Prefer `detect` over `find`.
* Prefer `inject` over `reduce`.
* Prefer `map` over `collect`.
* Prefer `select` over `find_all`.
* Prefer double quotes for strings.
* Prefer `&&` and `||` over `and` and `or`.
* Prefer `!` over `not`.
* Prefer `&:method_name` to `{ |item| item.method_name }` for simple method
  calls.
* Use `_` for unused block parameters.
* Use `%{}` for single-line strings needing interpolation and double-quotes.
* Use `{...}` for single-line blocks. Use `do..end` for multi-line blocks.
* Use `?` suffix for predicate methods.
* Use `CamelCase` for classes and modules, `snake_case` for variables and
  methods, `SCREAMING_SNAKE_CASE` for constants.
* Use `def self.method`, not `def Class.method` or `class << self`.
* Use `def` with parentheses when there are arguments.
* Use `each`, not `for`, for iteration.
* Use a trailing comma after each item in a multi-line list, including the last
  item. [Example][trailing comma example]
* Use heredocs for multi-line strings.

ERb
---

* When wrapping long lines, keep the method name on the same line as the ERb
  interpolation operator and keep each method argument on its own line.
* Prefer double quotes for attributes.

HTML
----

* Prefer double quotes for attributes.

Rails
-----

* Avoid `member` and `collection` routes.
* Use private instead of protected when defining controller methods.
* Name date columns with `_on` suffixes.
* Name datetime columns with `_at` suffixes.
* Name initializers for their gem name.
* Order ActiveRecord associations alphabetically by attribute name.
* Order ActiveRecord validations alphabetically by attribute name.
* Order ActiveRecord associations above ActiveRecord validations.
* Order controller contents: filters, public methods, private methods.
* Order i18n translations alphabetically by key name.
* Order model contents: constants, macros, public methods, private methods.
* Put application-wide partials in the [`app/views/application`] directory.
* Use `def self.method`, not the `scope :method` DSL.
* Use the default `render 'partial'` syntax over `render partial: 'partial'`.
* Use `link_to` for GET requests, and `button_to` for other HTTP verbs.

[`app/views/application`]: http://asciicasts.com/episodes/269-template-inheritance

Rails Migrations
----------------
* Set an empty string as the default constraint for non-required string and text
  fields. [Example][default example].
* List timestamps first when creating a new table. [Example][timestamps
  example].

Rails Routes
------------

* Avoid the `:except` option in routes.
* Order resourceful routes alphabetically by name.
* Use the `:only` option to explicitly state exposed routes.

Background Jobs
---------------

* Define a `PRIORITY` constant at the top of delayed job classes.
* Define two public methods: `self.enqueue` and `perform`.
* Put delayed job classes in `app/jobs`.

Email
-----

* Use the user's name in the `From` header and email in the `Reply-To` when
  [delivering email on behalf of the app's users].

[delivering email on behalf of the app's users]: http://robots.thoughtbot.com/post/3215611590/recipe-delivering-email-on-behalf-of-users

Testing
-------

* Avoid the `private` keyword in specs.
* Prefer `eq` to `==` in RSpec.
* Separate setup, exercise, verification, and teardown phases with newlines.
* Use RSpec's [`expect` syntax].
* Use RSpec's [`allow` syntax] for method stubs.
* Use `should` shorthand for [one-liners with an implicit subject].
* Use `not_to` instead of `to_not` in RSpec expectations.
* Prefer the `have_css` matcher to the `have_selector` matcher in Capybara assertions.
* Treat excessive stubbing as a sign of tightly coupled code
* Prefer dependency injection to stubbing

[`expect` syntax]: http://myronmars.to/n/dev-blog/2012/06/rspecs-new-expectation-syntax
[`allow` syntax]: https://github.com/rspec/rspec-mocks#method-stubs
[one-liners with an implicit subject]: https://github.com/rspec/rspec-expectations/blob/master/Should.md#one-liners

#### Acceptance Tests

* Avoid scenario titles that add no information, such as "successfully."
* Avoid scenario titles that repeat the feature title.
* Place helper methods for feature specs directly in a top-level `Features`
  module.
* Use Capybara's `feature/scenario` DSL.
* Use names like `ROLE_ACTION_spec.rb`, such as
  `user_changes_password_spec.rb`, for feature spec file names.
* Use only one `feature` block per feature spec file.
* Use scenario titles that describe the success and failure paths.
* Use spec/features directory to store feature specs.
* Use spec/support/features for support code related to feature specs.

#### Factories

* Order `factories.rb` contents: sequences, traits, factory definitions.
* Order factory attributes: implicit attributes, explicit attributes,
  child factory definitions. Each section's attributes are alphabetical.
* Order factory definitions alphabetically by factory name.
* Use one factories.rb file per project.

#### Unit Tests

* Don't prefix `it` block descriptions with `should`. Use [Imperative mood]
  instead.
* Put one-liner specs at the beginning of the outer `describe` blocks.
* Use `.method` to describe class methods and `#method` to describe instance
  methods.
* Use `context` to describe testing preconditions.
* Use `describe '#method_name'` to group tests by method-under-test
* Use a single, top-level `describe ClassName` block.
* Order validation, association, and method tests in the same order that they
  appear in the class.

[Imperative mood]: http://en.wikipedia.org/wiki/Imperative_mood
