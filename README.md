
# Okta Customer Identity Cloud - Actions Library

A collection of Auth0 Actions that have been written and used by Okta Solutions Engineers to demonstrate the Actions feature.


## Contributing

Contributions are always welcome!

To get started with your own contributions, clone the repository

```bash
  git clone https://github.com/WolbachAuth0/actions-library.git
  cd actions-library
```

then you can open the code base with an editor of your choice and add files as you see fit. Please stick to the following guidelines;

* Please adhere to the project structure. 
    * Put javascript files for your Auth0 Actions in the folder associated to the action trigger the code was written for.
* Make sure to describe the desired behavior of your Action. 
    * Place your description in the comments above the function.

When you want to contribute to the actions library, open a new feature branch for your changes and commit your changes to the feature branch. Then when you are publish your changes, [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=codespaces) and commit them to main. The authors will review and approve the pull request.


## Running Tests

Unit testing your actions code is completely optional. If you *want* to test your code and submit tests to this repository, we encourage you to write your unit tests with [Jest.js](https://jestjs.io/). If you want to run the tests, you'll need to install the dependency.

```bash
  cd actions-library
  npm install
```
Then to run tests, run the following command

```bash
  npm run test
```

If you want to write your own unit tests, then use the following guidelines;

* Name the file containing the tests with the same name as the file you're testing - but with the `.test.js` file extension.
* Save your files with your unit tests in the same directory as the files with the actions they are testing.

For example, if you're testing the action you wrote in the `my-action.js` file. then name the file containing your tests `my-action.test.js` and save it in the same directory as the `my-action.js` file.  


## References
 - [Auth0 Actions](https://auth0.com/docs/customize/actions)
 - [Readme dot IO](readme.so)

## Authors

- [Aaron Wolbach](https://www.github.com/WolbachAuth0)

