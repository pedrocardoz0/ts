abstract class Command {
    abstract commandLine(): string;

    execute(): void {
        console.log(`Command >> `, this.commandLine());
    }
}

class GitFetchAll extends Command {
    commandLine(): string {
        return "git fetch --all";
    }
}

const instanceGitFetchALl = new GitFetchAll();
instanceGitFetchALl.execute();

// Abstract classes cant be invoked;
new Command();
