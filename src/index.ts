import 'reflect-metadata'; // Depemndencia para agregar metadata a un objeto
const config = require('../onixjs.config.json');

import {HostBoot} from '@onixjs/core';
import * as path from 'path';

// Create new instance of HostBoot for ouur OnixJS Config
const boot : HostBoot = new HostBoot( config, {
    cwd: path.join(process.cwd(), 'dist'),
    port: 9000,
})

//Run OnixJs Context
boot.run().then(()=>{console.log('loaded')}).catch(e=>{console.log(e)});