class NotificationService {
  notifications = new Map<string, globalThis.Notification>();

  addNotification(key: string, Title: string, options?: NotificationOptions) {
    this.notifications.set(key, new window.Notification(Title, options));
  }
  Notify(notification: globalThis.Notification) {
    if (window.Notification.requestPermission()) {
      notification.onclick = () => {
        window.open(window.location.href);
        notification.close();
      };
    } else {
      window.Notification.requestPermission();
    }
  }
  NotifyByKey(key: string) {
    const notification = this.notifications.get(key);
    if (notification !== undefined && window.Notification.requestPermission()) {
      notification.onclick = function () {
        window.open(window.location.href);
        this.close();
      };
    } else {
      window.Notification.requestPermission();
    }
  }
}

export const notificationService = new NotificationService();
