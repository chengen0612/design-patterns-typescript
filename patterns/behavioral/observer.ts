interface Observer {
  update(observable: Observable): void;
}

interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class Mail {
  constructor(public title: string) {}
}

class MailService implements Observable {
  name: string;
  icon: string;
  private mails: Mail[];
  private observers: Observer[];

  constructor() {
    this.name = "Mail Service";
    this.icon = "📨";
    this.mails = [];
    this.observers = [];
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  receiveMail(mail: Mail) {
    console.log(`\nMail arrives: ${mail.title}`);
    this.mails.push(mail);
    this.notify();
  }

  getLastMail() {
    return this.mails[this.mails.length - 1];
  }
}

class Mailbox implements Observer {
  private mails: Mail[];

  constructor() {
    this.mails = [];
  }

  update(observable: Observable) {
    if (observable instanceof MailService) {
      this.addMail(observable.getLastMail());
      this.printMails();
    }
  }

  private addMail(mail: Mail) {
    this.mails.push(mail);
  }

  private printMails() {
    console.log("Mailbox updated...");

    for (const mail of this.mails) {
      console.log(`- ${mail.title}`);
    }
  }
}

class Alert {
  constructor(
    public title: string,
    public icon: string,
    public content: string
  ) {}
}

class NotificationCenter implements Observer {
  update(observable: Observable) {
    if (observable instanceof MailService) {
      const alert = this.createAlert(
        observable.name,
        observable.icon,
        observable.getLastMail().title
      );
      this.printAlert(alert);
    }

    // Handle other services
  }

  private createAlert(title: string, icon: string, content: string) {
    return new Alert(title, icon, content);
  }

  private printAlert(alert: Alert) {
    console.log(`${alert.title} ${alert.icon}: ${alert.content}`);
  }
}

class Demo {
  static run() {
    const mailService = new MailService();

    const mailbox = new Mailbox();
    const notificationCenter = new NotificationCenter();

    mailService.attach(mailbox);
    mailService.attach(notificationCenter);

    mailService.receiveMail(new Mail("React as a full-stack framework?"));

    mailService.detach(notificationCenter);

    mailService.receiveMail(new Mail("What's new for us in ECMAScript 2024"));
  }
}

export default Demo;
