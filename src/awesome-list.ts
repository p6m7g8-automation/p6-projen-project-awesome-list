import * as path from 'path';
import * as fs from 'fs-extra';
import { JsiiProjectOptions, JsiiProject, SampleFile, SampleReadme } from 'projen';

/**
 * Configurable knobs for Awesome Lists
 */
export interface AwesomeListProjectOptions extends JsiiProjectOptions {

  /**
   * What e-mail address to list for the Code of Conduct Point of Contact
   *
   * @default `project.authorAddress`
   */
  readonly contactEmail: string;
}

/**
 * Awesome List project
 *
 * @pjid awesome-list
 */
export class AwesomeList extends JsiiProject {
  constructor(options: AwesomeListProjectOptions) {
    super({
      ...options,
      releaseBranches: ['main'],
    });

    const root = this.outdir;

    const codeOfConductPath = path.join(root, 'code-of-conduct.md');
    new SampleFile(this, codeOfConductPath, {
      contents: fs.readFileSync(path.join(path.dirname(process.cwd()), '..', 'templates', 'code-of-conduct.md.in'), 'utf-8'),
    });

    const contributingPath = path.join(root, 'contributing.md');
    new SampleFile(this, contributingPath, {
      contents: fs.readFileSync(path.join(path.dirname(process.cwd()), '..', 'templates', 'contributing.in'), 'utf-8'),
    });

    const contents = this.readmeContents();
    new SampleReadme(this, contents);

    // Sets up `npx projen awesome-lint` for linting per awesome-lint standards
    this.addDeps('awesome-lint');

    const awesomeLintTask = this.addTask('awesome-lint');
    awesomeLintTask.exec('npx awesome-lint');
    this.buildTask.spawn(awesomeLintTask);
  }

  private readmeContents(): string {
    const contents = `# Awesome Projen [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated list of awesome [PROJECT](https://github.com/ORG/REPO) SHORTDESC.

LONGDESC

## Contents

## Contributing

Contributions welcome! Read the [contribution guidelines](contributing.md) first.`;
    return contents;
  }
}
