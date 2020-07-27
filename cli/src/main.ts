#!/usr/bin/env node
import { defaults } from './_cli'; defaults();

import * as cli from 'yargs'; 
import { register as registerMarkdown } from './commands/markdown'; registerMarkdown(cli);
import { register as registerPDF2JPG } from './commands/pdf2jpg'; registerPDF2JPG(cli);
import { register as registerSVG2JPG } from './commands/svg2jpg'; registerSVG2JPG(cli);
import { register as registerWatch } from './commands/watch'; registerWatch(cli);
import { register as registerAcademy } from './commands/academy'; registerAcademy(cli);
import { register as registerOneArmy } from './commands/onearmy'; registerOneArmy(cli);
import { register as registerTest } from './commands/tests'; registerTest(cli);
import { register as registerV4Bom } from './commands/v4/bom'; registerV4Bom(cli);
import { register as registerBazarProduct } from './commands/bazar/product'; registerBazarProduct(cli);
import { register as registerBazarVendor } from './commands/bazar/vendor'; registerBazarVendor(cli);
import { register as registerLibrary } from './commands/library'; registerLibrary(cli);
import { register as registerSanitize } from './commands/common/sanitize-filename'; registerSanitize(cli);
import { register as registerGHPIndex } from './commands/github/product_index'; registerGHPIndex(cli);
import { register as registerGHProjectIndex } from './commands/github/project_index'; registerGHProjectIndex(cli);
import { register as registerMD_Thumbs } from './commands/github/md_thumbs'; registerMD_Thumbs(cli);
import { register as registerMD_Page } from './commands/github/page'; registerMD_Page(cli);

const argv = cli.argv;

if (argv.h || argv.help) {
    cli.showHelp();
    process.exit();
} else if (argv.v || argv.version) {
    // tslint:disable-next-line:no-var-requires
    const pkginfo = require('../package.json');
    process.exit();
}
