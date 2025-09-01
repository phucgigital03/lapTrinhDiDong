// bai17 placeholder
// ...existing code...
// Singleton Logger
class Logger {
  private static instance: Logger | null = null;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${message}`);
  }
}

// Example usage (optional)
// const logger = Logger.getInstance();
// logger.log("App started");

export { Logger };

