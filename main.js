const OperatingSystem = require('os');
const totalMemoryInGB = OperatingSystem.totalmem() / 1024 / 1024 / 1024;
const totalFreeMemoryInGB = OperatingSystem.freemem() / 1024 / 1024 / 1024;
const osName = OperatingSystem.version();
const osVersion = OperatingSystem.release();
const osType = OperatingSystem.type();
const host = OperatingSystem.hostname();
const architecture = OperatingSystem.arch();
const memoryInfo = { total: `${Math.round(totalMemoryInGB)} GB`, free: `${Math.round(totalFreeMemoryInGB)} GB`, name: `${osName}`, version: `${osVersion}`, osType: `${osType}`, host: `${host}`, architecture: `${architecture}` };

console.table(memoryInfo);