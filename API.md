# API Reference

**Classes**

Name|Description
----|-----------
[AwesomeList](#p6-projen-project-awesome-list-awesomelist)|Awesome List project.


**Structs**

Name|Description
----|-----------
[AwesomeListProjectOptions](#p6-projen-project-awesome-list-awesomelistprojectoptions)|Configurable knobs for Awesome Lists.



## class AwesomeList  <a id="p6-projen-project-awesome-list-awesomelist"></a>

Awesome List project.

__Extends__: [JsiiProject](#projen-jsiiproject)

### Initializer




```ts
new AwesomeList(options: AwesomeListProjectOptions)
```

* **options** (<code>[AwesomeListProjectOptions](#p6-projen-project-awesome-list-awesomelistprojectoptions)</code>)  *No description*
  * **name** (<code>string</code>)  This is the name of your project. 
  * **clobber** (<code>boolean</code>)  Add a `clobber` task which resets the repo to origin. __*Default*__: true
  * **devContainer** (<code>boolean</code>)  Add a VSCode development environment (used for GitHub Codespaces). __*Default*__: false
  * **gitpod** (<code>boolean</code>)  Add a Gitpod development environment. __*Default*__: false
  * **logging** (<code>[LoggerOptions](#projen-loggeroptions)</code>)  Configure logging options such as verbosity. __*Default*__: {}
  * **outdir** (<code>string</code>)  The root directory of the project. __*Default*__: "."
  * **parent** (<code>[Project](#projen-project)</code>)  The parent project, if this project is part of a bigger project. __*Optional*__
  * **projectType** (<code>[ProjectType](#projen-projecttype)</code>)  Which type of project this is (library/app). __*Default*__: ProjectType.UNKNOWN
  * **readme** (<code>[SampleReadmeProps](#projen-samplereadmeprops)</code>)  The README setup. __*Default*__: { filename: 'README.md', contents: '# replace this' }
  * **allowLibraryDependencies** (<code>boolean</code>)  Allow the project to include `peerDependencies` and `bundledDependencies`. __*Default*__: true
  * **authorEmail** (<code>string</code>)  Author's e-mail. __*Optional*__
  * **authorName** (<code>string</code>)  Author's name. __*Optional*__
  * **authorOrganization** (<code>boolean</code>)  Author's Organization. __*Optional*__
  * **authorUrl** (<code>string</code>)  Author's URL / Website. __*Optional*__
  * **autoDetectBin** (<code>boolean</code>)  Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. __*Default*__: true
  * **bin** (<code>Map<string, string></code>)  Binary programs vended with your module. __*Optional*__
  * **bundledDeps** (<code>Array<string></code>)  List of dependencies to bundle into this module. __*Optional*__
  * **deps** (<code>Array<string></code>)  Runtime dependencies of this module. __*Default*__: []
  * **description** (<code>string</code>)  The description is just a string that helps people understand the purpose of the package. __*Optional*__
  * **devDeps** (<code>Array<string></code>)  Build dependencies for this module. __*Default*__: []
  * **entrypoint** (<code>string</code>)  Module entrypoint (`main` in `package.json`). __*Default*__: "lib/index.js"
  * **homepage** (<code>string</code>)  Package's Homepage / Website. __*Optional*__
  * **keywords** (<code>Array<string></code>)  Keywords to include in `package.json`. __*Optional*__
  * **license** (<code>string</code>)  License's SPDX identifier. __*Default*__: "Apache-2.0"
  * **licensed** (<code>boolean</code>)  Indicates if a license should be added. __*Default*__: true
  * **maxNodeVersion** (<code>string</code>)  Minimum node.js version to require via `engines` (inclusive). __*Default*__: no max
  * **minNodeVersion** (<code>string</code>)  Minimum Node.js version to require via package.json `engines` (inclusive). __*Default*__: no "engines" specified
  * **npmTaskExecution** (<code>[NpmTaskExecution](#projen-npmtaskexecution)</code>)  Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). __*Default*__: NpmTaskExecution.PROJEN
  * **packageManager** (<code>[NodePackageManager](#projen-nodepackagemanager)</code>)  The Node Package Manager used to execute scripts. __*Default*__: NodePackageManager.YARN
  * **packageName** (<code>string</code>)  The "name" in package.json. __*Default*__: defaults to project name
  * **peerDependencyOptions** (<code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code>)  Options for `peerDeps`. __*Optional*__
  * **peerDeps** (<code>Array<string></code>)  Peer dependencies for this module. __*Default*__: []
  * **projenCommand** (<code>string</code>)  The shell command to use in order to run the projen CLI. __*Default*__: "npx projen"
  * **repository** (<code>string</code>)  The repository is the location where the actual code for your package lives. __*Optional*__
  * **repositoryDirectory** (<code>string</code>)  If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. __*Optional*__
  * **scripts** (<code>Map<string, string></code>)  npm scripts to include. __*Default*__: {}
  * **stability** (<code>string</code>)  Package's Stability. __*Optional*__
  * **antitamper** (<code>boolean</code>)  Checks that after build there are no modified files on git. __*Default*__: true
  * **buildWorkflow** (<code>boolean</code>)  Define a GitHub workflow for building PRs. __*Default*__: true if not a subproject
  * **codeCov** (<code>boolean</code>)  Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. __*Default*__: false
  * **codeCovTokenSecret** (<code>string</code>)  Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. __*Default*__: if this option is not specified, only public repositories are supported
  * **copyrightOwner** (<code>string</code>)  License copyright owner. __*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
  * **copyrightPeriod** (<code>string</code>)  The copyright years to put in the LICENSE file. __*Default*__: current year
  * **defaultReleaseBranch** (<code>string</code>)  The name of the main release branch. __*Default*__: "master"
  * **dependabot** (<code>boolean</code>)  Include dependabot configuration. __*Default*__: true
  * **dependabotOptions** (<code>[github.DependabotOptions](#projen-github-dependabotoptions)</code>)  Options for dependabot. __*Default*__: default options
  * **gitignore** (<code>Array<string></code>)  Additional entries to .gitignore. __*Optional*__
  * **jest** (<code>boolean</code>)  Setup jest unit tests. __*Default*__: true
  * **jestOptions** (<code>[JestOptions](#projen-jestoptions)</code>)  Jest options. __*Default*__: default options
  * **mergify** (<code>boolean</code>)  Adds mergify configuration. __*Default*__: true
  * **mergifyAutoMergeLabel** (<code>string</code>)  Automatically merge PRs that build successfully and have this label. __*Default*__: "auto-merge"
  * **mergifyOptions** (<code>[github.MergifyOptions](#projen-github-mergifyoptions)</code>)  Options for mergify. __*Default*__: default options
  * **npmDistTag** (<code>string</code>)  The dist-tag to use when releasing to npm. __*Default*__: "latest"
  * **npmignore** (<code>Array<string></code>)  Additional entries to .npmignore. __*Optional*__
  * **npmignoreEnabled** (<code>boolean</code>)  Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. __*Default*__: true
  * **npmRegistry** (<code>string</code>)  The registry url to use when releasing packages. __*Default*__: "registry.npmjs.org"
  * **projenDevDependency** (<code>boolean</code>)  Indicates of "projen" should be installed as a devDependency. __*Default*__: true
  * **projenUpgradeAutoMerge** (<code>boolean</code>)  Automatically merge projen upgrade PRs when build passes. __*Default*__: "true" if mergify auto-merge is enabled (default)
  * **projenUpgradeSchedule** (<code>Array<string></code>)  Customize the projenUpgrade schedule in cron expression. __*Default*__: [ "0 6 * * *" ]
  * **projenUpgradeSecret** (<code>string</code>)  Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). __*Default*__: no automatic projen upgrade pull requests
  * **projenVersion** (<code>[Semver](#projen-semver)</code>)  Version of projen to install. __*Default*__: Semver.latest()
  * **pullRequestTemplate** (<code>boolean</code>)  Include a GitHub pull request template. __*Default*__: true
  * **pullRequestTemplateContents** (<code>string</code>)  The contents of the pull request template. __*Default*__: default content
  * **rebuildBot** (<code>boolean</code>)  Installs a GitHub workflow which is triggered when the comment "@projen rebuild" is added to a pull request. __*Default*__: true if not a subproject
  * **rebuildBotCommand** (<code>string</code>)  The pull request bot command to use in order to trigger a rebuild and commit of the contents of the branch. __*Default*__: "rebuild"
  * **releaseBranches** (<code>Array<string></code>)  Branches which trigger a release. __*Default*__: [ "master" ]
  * **releaseEveryCommit** (<code>boolean</code>)  Automatically release new versions every commit to one of branches in `releaseBranches`. __*Default*__: true
  * **releaseSchedule** (<code>string</code>)  CRON schedule to trigger new releases. __*Default*__: no scheduled releases
  * **releaseToNpm** (<code>boolean</code>)  Automatically release to npm when new versions are introduced. __*Default*__: false
  * **releaseWorkflow** (<code>boolean</code>)  Define a GitHub workflow for releasing from "master" when new versions are bumped. __*Default*__: true if not a subproject
  * **workflowBootstrapSteps** (<code>Array<any></code>)  Workflow steps to use in order to bootstrap this repo. __*Default*__: "yarn install --frozen-lockfile && yarn projen"
  * **workflowContainerImage** (<code>string</code>)  Container image to use for GitHub workflows. __*Default*__: default image
  * **workflowNodeVersion** (<code>string</code>)  The node version to use in GitHub workflows. __*Default*__: same as `minNodeVersion`
  * **author** (<code>string</code>)  The name of the library author. 
  * **authorAddress** (<code>string</code>)  Email or URL of the library author. 
  * **repositoryUrl** (<code>string</code>)  Git repository URL. 
  * **compat** (<code>boolean</code>)  Automatically run API compatibility test against the latest version published to npm after compilation. __*Default*__: false
  * **compatIgnore** (<code>string</code>)  Name of the ignore file for API compatibility tests. __*Default*__: ".compatignore"
  * **docgen** (<code>boolean</code>)  Automatically generate API.md from jsii. __*Default*__: true
  * **dotnet** (<code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code>)  Publish to NuGet. __*Default*__: no publishing
  * **eslint** (<code>boolean</code>)  Install eslint. __*Default*__: true
  * **java** (<code>[JsiiJavaTarget](#projen-jsiijavatarget)</code>)  Publish to maven. __*Default*__: no publishing
  * **python** (<code>[JsiiPythonTarget](#projen-jsiipythontarget)</code>)  Publish to pypi. __*Default*__: no publishing
  * **rootdir** (<code>string</code>)  *No description* __*Default*__: "."
  * **contactEmail** (<code>string</code>)  What e-mail address to list for the Code of Conduct Point of Contact. __*Default*__: `project.authorAddress`




## struct AwesomeListProjectOptions  <a id="p6-projen-project-awesome-list-awesomelistprojectoptions"></a>


Configurable knobs for Awesome Lists.



Name | Type | Description 
-----|------|-------------
**author**🔹 | <code>string</code> | The name of the library author.
**authorAddress**🔹 | <code>string</code> | Email or URL of the library author.
**name**🔹 | <code>string</code> | This is the name of your project.
**repositoryUrl**🔹 | <code>string</code> | Git repository URL.
**allowLibraryDependencies**?🔹 | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`.<br/>__*Default*__: true
**antitamper**?🔹 | <code>boolean</code> | Checks that after build there are no modified files on git.<br/>__*Default*__: true
**authorEmail**?🔹 | <code>string</code> | Author's e-mail.<br/>__*Optional*__
**authorName**?🔹 | <code>string</code> | Author's name.<br/>__*Optional*__
**authorOrganization**?🔹 | <code>boolean</code> | Author's Organization.<br/>__*Optional*__
**authorUrl**?🔹 | <code>string</code> | Author's URL / Website.<br/>__*Optional*__
**autoDetectBin**?🔹 | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.<br/>__*Default*__: true
**bin**?🔹 | <code>Map<string, string></code> | Binary programs vended with your module.<br/>__*Optional*__
**buildWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for building PRs.<br/>__*Default*__: true if not a subproject
**bundledDeps**?🔹 | <code>Array<string></code> | List of dependencies to bundle into this module.<br/>__*Optional*__
**clobber**?🔹 | <code>boolean</code> | Add a `clobber` task which resets the repo to origin.<br/>__*Default*__: true
**codeCov**?🔹 | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.<br/>__*Default*__: false
**codeCovTokenSecret**?🔹 | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.<br/>__*Default*__: if this option is not specified, only public repositories are supported
**compat**?🔹 | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation.<br/>__*Default*__: false
**compatIgnore**?🔹 | <code>string</code> | Name of the ignore file for API compatibility tests.<br/>__*Default*__: ".compatignore"
**contactEmail**? | <code>string</code> | What e-mail address to list for the Code of Conduct Point of Contact.<br/>__*Default*__: `project.authorAddress`
**copyrightOwner**?🔹 | <code>string</code> | License copyright owner.<br/>__*Default*__: defaults to the value of authorName or "" if `authorName` is undefined.
**copyrightPeriod**?🔹 | <code>string</code> | The copyright years to put in the LICENSE file.<br/>__*Default*__: current year
**defaultReleaseBranch**?🔹 | <code>string</code> | The name of the main release branch.<br/>__*Default*__: "master"
**dependabot**?🔹 | <code>boolean</code> | Include dependabot configuration.<br/>__*Default*__: true
**dependabotOptions**?🔹 | <code>[github.DependabotOptions](#projen-github-dependabotoptions)</code> | Options for dependabot.<br/>__*Default*__: default options
**deps**?🔹 | <code>Array<string></code> | Runtime dependencies of this module.<br/>__*Default*__: []
**description**?🔹 | <code>string</code> | The description is just a string that helps people understand the purpose of the package.<br/>__*Optional*__
**devContainer**?🔹 | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces).<br/>__*Default*__: false
**devDeps**?🔹 | <code>Array<string></code> | Build dependencies for this module.<br/>__*Default*__: []
**docgen**?🔹 | <code>boolean</code> | Automatically generate API.md from jsii.<br/>__*Default*__: true
**dotnet**?🔹 | <code>[JsiiDotNetTarget](#projen-jsiidotnettarget)</code> | Publish to NuGet.<br/>__*Default*__: no publishing
**entrypoint**?🔹 | <code>string</code> | Module entrypoint (`main` in `package.json`).<br/>__*Default*__: "lib/index.js"
**eslint**?🔹 | <code>boolean</code> | Install eslint.<br/>__*Default*__: true
**gitignore**?🔹 | <code>Array<string></code> | Additional entries to .gitignore.<br/>__*Optional*__
**gitpod**?🔹 | <code>boolean</code> | Add a Gitpod development environment.<br/>__*Default*__: false
**homepage**?🔹 | <code>string</code> | Package's Homepage / Website.<br/>__*Optional*__
**java**?🔹 | <code>[JsiiJavaTarget](#projen-jsiijavatarget)</code> | Publish to maven.<br/>__*Default*__: no publishing
**jest**?🔹 | <code>boolean</code> | Setup jest unit tests.<br/>__*Default*__: true
**jestOptions**?🔹 | <code>[JestOptions](#projen-jestoptions)</code> | Jest options.<br/>__*Default*__: default options
**keywords**?🔹 | <code>Array<string></code> | Keywords to include in `package.json`.<br/>__*Optional*__
**license**?🔹 | <code>string</code> | License's SPDX identifier.<br/>__*Default*__: "Apache-2.0"
**licensed**?🔹 | <code>boolean</code> | Indicates if a license should be added.<br/>__*Default*__: true
**logging**?🔹 | <code>[LoggerOptions](#projen-loggeroptions)</code> | Configure logging options such as verbosity.<br/>__*Default*__: {}
**maxNodeVersion**?🔹 | <code>string</code> | Minimum node.js version to require via `engines` (inclusive).<br/>__*Default*__: no max
**mergify**?🔹 | <code>boolean</code> | Adds mergify configuration.<br/>__*Default*__: true
**mergifyAutoMergeLabel**?🔹 | <code>string</code> | Automatically merge PRs that build successfully and have this label.<br/>__*Default*__: "auto-merge"
**mergifyOptions**?🔹 | <code>[github.MergifyOptions](#projen-github-mergifyoptions)</code> | Options for mergify.<br/>__*Default*__: default options
**minNodeVersion**?🔹 | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive).<br/>__*Default*__: no "engines" specified
**npmDistTag**?🔹 | <code>string</code> | The dist-tag to use when releasing to npm.<br/>__*Default*__: "latest"
**npmRegistry**?🔹 | <code>string</code> | The registry url to use when releasing packages.<br/>__*Default*__: "registry.npmjs.org"
**npmTaskExecution**?🔹 | <code>[NpmTaskExecution](#projen-npmtaskexecution)</code> | Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz).<br/>__*Default*__: NpmTaskExecution.PROJEN
**npmignore**?🔹 | <code>Array<string></code> | Additional entries to .npmignore.<br/>__*Optional*__
**npmignoreEnabled**?🔹 | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.<br/>__*Default*__: true
**outdir**?🔹 | <code>string</code> | The root directory of the project.<br/>__*Default*__: "."
**packageManager**?🔹 | <code>[NodePackageManager](#projen-nodepackagemanager)</code> | The Node Package Manager used to execute scripts.<br/>__*Default*__: NodePackageManager.YARN
**packageName**?🔹 | <code>string</code> | The "name" in package.json.<br/>__*Default*__: defaults to project name
**parent**?🔹 | <code>[Project](#projen-project)</code> | The parent project, if this project is part of a bigger project.<br/>__*Optional*__
**peerDependencyOptions**?🔹 | <code>[PeerDependencyOptions](#projen-peerdependencyoptions)</code> | Options for `peerDeps`.<br/>__*Optional*__
**peerDeps**?🔹 | <code>Array<string></code> | Peer dependencies for this module.<br/>__*Default*__: []
**projectType**?🔹 | <code>[ProjectType](#projen-projecttype)</code> | Which type of project this is (library/app).<br/>__*Default*__: ProjectType.UNKNOWN
**projenCommand**?🔹 | <code>string</code> | The shell command to use in order to run the projen CLI.<br/>__*Default*__: "npx projen"
**projenDevDependency**?🔹 | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency.<br/>__*Default*__: true
**projenUpgradeAutoMerge**?🔹 | <code>boolean</code> | Automatically merge projen upgrade PRs when build passes.<br/>__*Default*__: "true" if mergify auto-merge is enabled (default)
**projenUpgradeSchedule**?🔹 | <code>Array<string></code> | Customize the projenUpgrade schedule in cron expression.<br/>__*Default*__: [ "0 6 * * *" ]
**projenUpgradeSecret**?🔹 | <code>string</code> | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).<br/>__*Default*__: no automatic projen upgrade pull requests
**projenVersion**?🔹 | <code>[Semver](#projen-semver)</code> | Version of projen to install.<br/>__*Default*__: Semver.latest()
**pullRequestTemplate**?🔹 | <code>boolean</code> | Include a GitHub pull request template.<br/>__*Default*__: true
**pullRequestTemplateContents**?🔹 | <code>string</code> | The contents of the pull request template.<br/>__*Default*__: default content
**python**?🔹 | <code>[JsiiPythonTarget](#projen-jsiipythontarget)</code> | Publish to pypi.<br/>__*Default*__: no publishing
**readme**?🔹 | <code>[SampleReadmeProps](#projen-samplereadmeprops)</code> | The README setup.<br/>__*Default*__: { filename: 'README.md', contents: '# replace this' }
**rebuildBot**?🔹 | <code>boolean</code> | Installs a GitHub workflow which is triggered when the comment "@projen rebuild" is added to a pull request.<br/>__*Default*__: true if not a subproject
**rebuildBotCommand**?🔹 | <code>string</code> | The pull request bot command to use in order to trigger a rebuild and commit of the contents of the branch.<br/>__*Default*__: "rebuild"
**releaseBranches**?🔹 | <code>Array<string></code> | Branches which trigger a release.<br/>__*Default*__: [ "master" ]
**releaseEveryCommit**?🔹 | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`.<br/>__*Default*__: true
**releaseSchedule**?🔹 | <code>string</code> | CRON schedule to trigger new releases.<br/>__*Default*__: no scheduled releases
**releaseToNpm**?🔹 | <code>boolean</code> | Automatically release to npm when new versions are introduced.<br/>__*Default*__: false
**releaseWorkflow**?🔹 | <code>boolean</code> | Define a GitHub workflow for releasing from "master" when new versions are bumped.<br/>__*Default*__: true if not a subproject
**repository**?🔹 | <code>string</code> | The repository is the location where the actual code for your package lives.<br/>__*Optional*__
**repositoryDirectory**?🔹 | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.<br/>__*Optional*__
**rootdir**?🔹 | <code>string</code> | __*Default*__: "."
**scripts**?🔹 | <code>Map<string, string></code> | npm scripts to include.<br/>__*Default*__: {}
**stability**?🔹 | <code>string</code> | Package's Stability.<br/>__*Optional*__
**workflowBootstrapSteps**?🔹 | <code>Array<any></code> | Workflow steps to use in order to bootstrap this repo.<br/>__*Default*__: "yarn install --frozen-lockfile && yarn projen"
**workflowContainerImage**?🔹 | <code>string</code> | Container image to use for GitHub workflows.<br/>__*Default*__: default image
**workflowNodeVersion**?🔹 | <code>string</code> | The node version to use in GitHub workflows.<br/>__*Default*__: same as `minNodeVersion`



