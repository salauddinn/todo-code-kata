import { jest } from '@jest/globals';

describe('main function', () => {
    let originalArgv;
    beforeEach(() => {
        jest.resetModules();
        originalArgv = process.argv;
    });

    afterEach(() => {
        jest.resetAllMocks();
        process.argv = originalArgv;
    });


    it('should fetch and display TODOs with default evenLimit ', async () => {
        const consoleSpy = jest.spyOn(global.console, "info");

        await runCommand();
        expect(consoleSpy).toHaveBeenCalledTimes(20);
    });

    it('should fetch and display TODOs with evenLimit of 1', async () => {
        const consoleSpy = jest.spyOn(global.console, "info");

        await runCommand("--evenLimit", "1");
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

});

async function runCommand(...args) {
    process.argv = [
        "node",
        "./index.js",
        "todos",
        ...args,
    ];
    return await import('./index.js');
}