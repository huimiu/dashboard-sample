# Prerequisites

- [NodeJS](https://nodejs.org/en/)
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) version after 1.55 or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

# Steps to setup this sample

1. Clone the repo to your local workspace or directly download the source code.
2. Open the project in Visual Studio Code.
3. Consent `"TeamsActivity.Send"` permission: 
   To consent the "TeamsActivity.Send" permission, you should do the following steps after provision or run local debug twice.
   
   Go to [Azure portal](https://portal.azure.com/) > Click `Azure Active Directory` > Click `App registrations` in the side bar > Click your Dashboard app > Click `API permissions` in the side bar > Click `+Add a permission` > Choose `Microsoft Graph` > Choose `Application permissions` > Find the permission `TeamsActivity.Send` > Click `Add permissions` button in the bottom > Click `✔Grant admin consent for XXX` and then click `Yes` button to finish the admin consent
4. Press `F5` to open a browser window.
5. The first time you run this sample, you need to login to consent some delegated permissions. After login, you may need to restart the sample. If you don't see the consent page, please check if your browser blocks the pop-up window.

   <img src="tabs\public\popup-block.png">

> If prompted that you cannot authorize access to calendar, tasks and files, please use onmicrosoft's M365 account.

# Try the sample

   <img src="tabs\public\dashboard.png">

1. You can see several widgets in the dashboard, some show data charts and others show informations with interactive buttons.
2. In the `Area chart` widget, you can see selling data curves and a table with some informations, like features names, owners, priorities, and processing states.
3. In the `Teams Collaboration` widget, you can see some news with pictures and words to help you quickly obtain the most recent news.
4. In the `Your upcoming events` widget, you can see the upcoming events on your calendar. And you can click the `Join` button to join a meeting.

   <img src="tabs\public\join-meeting.png" style="zoom: 50%">

5. In the `Your Tasks` widget, you can see your tasks list. You can click and enter a task name to add a new task. After you successfully add a task, you will receive a notification.

   <img src="tabs\public\add-task.png" style="zoom: 50%">

   <img src="tabs\public\task-notification.png" style="zoom: 30%">

6. In the `Your Documents` widget, you can see your documents. You can click one to open it. You can also click the `...` button on the right to choose the way to open the file, download the file or copy the file link.

   <img src="tabs\public\document.png" style="zoom: 50%">