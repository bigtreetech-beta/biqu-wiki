---
sidebar_position: 3
---

# Panda Touch Firmware Config

Panda Touch Firmware Config

<!-- import lib start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- import lib end -->

## First-Time Connection Guide

After initial startup or executing the `factory reset` command, you will see the following screen.

### Language Selection Guide

<img src={require('@site/docs/panda-series/panda-touch/img/language_guide.png').default} alt="" width="600" />

* Select a language for Panda Touch, then tap `Next`

### WiFi Connection Guide

<img src={require('@site/docs/panda-series/panda-touch/img/guide_wifi.png').default} alt="" width="600" />

During the initial setup process, Panda Touch will scan for WiFi networks and display up to 20 networks with the strongest signal strength. If you cannot find the desired network in the list, tap `Refresh`, and Panda Touch will rescan for WiFi networks.
>Note:
>The current firmware does not support connecting to hidden WiFi networks. Additionally, while Panda Touch is connecting to WiFi, it cannot simultaneously perform WiFi scanning tasks.
* Clicking a WiFi name in the list will bring up the [Keyboard Interface] (#Keyboard Interface). After entering the correct password, click `Confirm` to begin connecting to WiFi. (Password length: 8–64 characters)
* Connection status will display next to the WiFi network name. The `Spinner` graphic indicates WiFi is still attempting to connect. `✔` indicates a successful connection.
* After successful connection, the `Next` button will become active. Click `Next` to proceed to the printer connection menu.

>Note:
>If you are using a WiFi network with multiple access points sharing the same SSID, select the SSID with the strongest signal strength from the list.

Translated with DeepL.com (free version)

### 打印机连接菜单

<img src={require('@site/docs/panda-series/panda-touch/img/guide_printer.png').default} alt="" width="600" />

There are two possible methods to connect Panda Touch to a printer.
    1. Automatic scanning (recommended).
    2. Manual input.

### Locating Your Connection Details

During this process, you may need to enter connection details. These can be found by following the steps below.

#### P1P & P1S

* Navigate to `Settings -> WLAN` on the LCD menu, then click `OK`.

    <img src={require('@site/docs/panda-series/panda-touch/img/p1_1.png').default} alt="" width="600" />

* Enter the IP address and access code in the corresponding Panda Touch input fields (the access code is used for automatic scanning only).

    <img src={require('@site/docs/panda-series/panda-touch/img/p1_2.png').default} alt="" width="600" />

* In the screen menu, locate `Settings -> Device`, then click `OK`.

    <img src={require('@site/docs/panda-series/panda-touch/img/p1_3.png').default} alt="" width="600" />

* Enter the serial number code in the corresponding Panda Touch input field.

    <img src={require('@site/docs/panda-series/panda-touch/img/p1_4.png').default} alt="" width="600" />

#### Auto Scan

* To perform an auto scan, simply click the `Scan` button. Bambu Lab printers on the same WiFi network will appear in the scan results with pre-filled `Name`, `Printer IP`, `SN`, and `Model` information. Pre-filling these fields makes adding printers easier and reduces errors caused by manual data entry mistakes. The only data you need to enter is the `Access Code`, which can be found in the printer's WiFi/LAN menu. Instructions on how to locate the access code will appear on the Panda Touch screen. Printers previously connected to Panda Touch will still appear in the scan results, but Panda Touch will not allow them to be added again, and `Already Added` will display near the printer icon. After entering the access code, you can confirm the connection or manually add some of the data below.

#### Manual Input

* You can click the printer icon on the left to access the menu for selecting the printer model. You have to set the printer according to the actual model of the connected printer.Panda Touch will also do some checking in the background to confirm the model. The available models are listed below:
    * P1P
    * P1S
    * X1C
    * A1 mini
    * A1
    
  After selecting a model using the icon, the contents of the `Model` field will be populated with the corresponding model name.

* After selecting a printer model, there are four required fields. These fields contain the information needed to connect to and identify the printer. Click on the `i` icon and swipe left or right for instructions on how to find this information on the printer.

    * `Name`: User-defined name used to identify the printer. (Length: 1~15 characters)
    * `Printer IP`: Used by the Panda Touch to connect to the printer. (Length: 7~15 characters) * `Access Code`: for Panda Touch to connect to the printer.
    * `Access Code`: used for Panda Touch to connect to the printer. (Length: 8 characters)
    * `SN`: for Panda Touch to connect to the printer. (Length: 15 characters)

* There are 4 optional fields that can help you identify certain parameters of the printer for later use.

    * `Model': The model name identifies the exact model of the printer and defines the picture associated with it. p1p, p1s, x1c, a1 mini, a1 or custom. (Length: 0~15 characters)
    * `Supply Color`: The color of the supplies used by the printer. (length: 0~6 characters)
    * `Supply Material`: the supply material used by the printer. (Length: 0~6 characters) * `Consumable Color`: The consumable color used by the printer.
    * `Nozzle Diameter`: the diameter of the nozzle used by the printer. (Length: 0~6 characters) * `Confirm` button

- `Confirmation` button

    After filling in the `Required` information, you can click the `Confirm` button to start connecting to the printer.The title bar of the Panda Touch will show the connection status.

## Cloud Mode Features

If any of your P1P/P1S printers are not set to `LAN only` mode, you will need to switch the Panda Touch's communication method with the P1P/P1S printer to cloud mode in order to use the following functions:

* Heat up
* Start Printing
* Pause Printing
* Stop Printing

Please follow the steps below to switch the communication method between Panda Touch and P1P/P1S printer to cloud mode.

#### Log in to your Takitake account
* Click to jump to the setting page, and then click the `Login to Takitake Account` button. 

    <img src={require('@site/docs/panda-series/panda-touch/img/add_account.png').default} alt="" width="600" />

* Select your region by clicking the arrow in the upper right corner of the pop-up window.

* Users in China use cell phone numbers, while users in global regions use email addresses.

::::info How to find bambulab account

<img src={require('@site/docs/panda-series/panda-touch/img/login.png').default} alt="" width="600" />

:::warning know issue

Currently, 2-step authentication needs to be turned off to enable Cloud Mode on Panda Touch. If you want to keep it enabled then you can turn it off, enable Cloud Mode on Panda Touch and then turn it back on again. Please note that you may need to repeat this process every three months as the login details on Panda Touch will expire after this period.

:::

<img src={require('@site/docs/panda-series/panda-touch/img/input_account.png').default} alt="" width="600" />

::::

#### Synchronizing printers under an account to a local device

* After successfully logging in, you have the option to convert all existing printers to communicate with PandaTouch to Cloud Mode.

* Perform this action only if all printers are running in Cloud Mode, if the printer has `LAN Only` mode turned on, this action can be skipped. To change the communication method between PandaTouch and printers see [How to switch the communication method between PandaTouch and printers](#How to switch the communication method between pandatouch and printers)

    <img src={require('@site/docs/panda-series/panda-touch/img/login_ok.png').default} alt="" width="600" />

* Click `Yes' if you want to convert the communication between your existing printer and PandaTouch to cloud mode. 

* The printer must be on the same network as the PandaTouch during this process. If the network connection is poor, you may need to re-edit the printer's IP address.

    <img src={require('@site/docs/panda-series/panda-touch/img/sync_ok.png').default} alt="" width="600" />

* Once the printer is working in cloud mode, you will notice a green cloud associated with its card in the multi-printer view. The cloud indicates how the printer is communicating with PandaTouch.

* You will also notice a pair of green arrows indicating the connection status to that printer.
    <img src={require('@site/docs/panda-series/panda-touch/img/cloud_mode.png').default} alt="" width="600" />

#### How to delete a logged in account

* Delete the account information saved on the PandaTouch by clicking the `X` button in the upper right corner of the account information.

* After deleting the account information, the communication mode between the PandaTouch and the printer will be changed to local mode. Please note that this will not set the printer itself to `LAN only` mode, but will tell the Panda Touch to only use LAN mode to talk to the printer, which may result in some loss of functionality.

    <img src={require('@site/docs/panda-series/panda-touch/img/del_account.png').default} alt="" width="600" />

#### 如何切换PandaTouch和打印机之间的通信方式

* 导航到打印机/组卡页面。
* 找到要启用或禁用云模式的打印机。
* 向下滚动到该打印机的`编辑`按钮。
* 选择`启用云`将打印机与PandaTouch的通信方式切换为云模式。

:::tip

必须在设置菜单中启用云帐户，否则将无法将该打印机与PandaTouch之间的通信方式设置为云模式。

<img src={require('@site/docs/panda-series/panda-touch/img/switch_work_mode.png').default} alt="" width="600" />

:::

## 键盘输入

1. 使用此键可以隐藏或显示输入的信息。
2. 在大写字母和小写字母之间切换。
3. 切换到`符号输入`。
4. 切换到`数字输入`。

- 字母输入

    <img src={require('@site/docs/panda-series/panda-touch/img/keyboard_letter.png').default} alt="" width="600" />

- 符号输入

    <img src={require('@site/docs/panda-series/panda-touch/img/keyboard_symbol.png').default} alt="" width="600" />

- 数字输入

    <img src={require('@site/docs/panda-series/panda-touch/img/keyboard_number.png').default} alt="" width="600" />

## 打印任务和缩略图显示

<img src={require('@site/docs/panda-series/panda-touch/img/thumbnail_preview.png').default} alt="" width="600" />

:::info

仅显示从Bambu Studio发起的打印任务，该.3mf文件需要小于 20M，X1系列机器暂不支持。

缩略图不匹配: 仅当image文件夹下的图片时间戳与其他打印文件相同时会导致缩略图不匹配。

增强缩略图显示: 在设置页面有个选项用于增强缩略图显示，开启后，从U盘打印或者在SD卡面板操作时都会有比较长的延时。

:::

## 耗材控制

Panda Touch允许用户配置外部线轴支架和AMS上使用的耗材的类型和颜色。用户还可以使用此菜单加载和卸载过滤器。

执行任何操作时，请确保选择了正确的AMS装置和灯丝槽。当耗材周围有红色边框时，您就会知道耗材已被选中。如果未选择任何内容，则`加载`和`卸载`按钮将变灰。

<img src={require('@site/docs/panda-series/panda-touch/img/filament_screen.png').default} alt="" width="600" />

## 耗材烘干
Panda Touch允许用户在X1系列和P1S上烘干耗材 

* 点击烘干按钮

<img src={require('@site/docs/panda-series/panda-touch/img/drying.png').default} alt="" width="500" />

* 按照右侧的步骤操作

<img src={require('@site/docs/panda-series/panda-touch/img/filament_dry.png').default} alt="" width="500" />

## 零件跳过

:::note

打印任务需要从Bambu Studio 或者 Handy app上发起，不支持重新打印的任务。  

以下情况不可用
- 单盘1个或者64个以上零件 
- Bambu studio 版本低于V1.6

:::

<img src={require('@site/docs/panda-series/panda-touch/img/skip_objects.gif').default} alt="" width="500" />

## HMS (健康管理系统)

<img src={require('@site/docs/panda-series/panda-touch/img/hms.png').default} alt="" width="600" />

* 点击Panda Touch的标题栏，HMS通知中心菜单将展开。
* 当检测到新的HMS通知时，Panda Touch将自动扩展HMS通知中心。
* 标题栏的左上角将显示已发送HMS通知的打印机的数量。
* 点击相应的HMS通知，弹出wiki链接二维码，用于解决此问题。
* 单击`X`可忽略此通知。
* 单击`全部忽略`可忽略所有通知**注意：** Panda Touch将忽略除X1C以外的所有打印机的通知。由于X1C以规则的间隔重复发送通知信息，因此被忽略的通知可能在此后不久再次出现。

## 分组逻辑
Panda Touch允许您创建多达10个组，每个组可以包含单个或多个打印机。

### 如何添加到组

* 在已连接的打印机列表中点击+，弹出多功能菜单。
    
    <img src={require('@site/docs/panda-series/panda-touch/img/press_plus.png').default} alt="" width="600" />

* 选择添加组选项。

    <img src={require('@site/docs/panda-series/panda-touch/img/press_add_group.png').default} alt="" width="600" />

* 选择要添加到组中的打印机，并确保选择其中一台作为主机（组中的其他打印机将遵循发送给主机的命令）。

    <img src={require('@site/docs/panda-series/panda-touch/img/group_choose_printer.png').default} alt="" width="600" />

* 点击下一步，输入组名，然后单击`确定`。
    <img src={require('@site/docs/panda-series/panda-touch/img/group_name.png').default} alt="" width="600" />

* 现在，您可以在打印机列表中看到该组，点击该组将允许您控制整个组，但显示的控件将是组长的控件。

### 在打印机组控制和单个打印机控制之间切换

* 要控制单个打印机，只需单击与其对应的卡片，您就会注意到顶部栏中的名称更改为该打印机的名称。现在，即使它是组的一部分，您也可以单独向它发送命令。
* 如果您向单个打印机发送一个需要一些时间的命令（如归位），然后向它所属的组发送一个命令，如果第一个命令仍然繁忙，则第二个命令将被忽略。
* 要控制整个组，只需单击与该组对应的卡片，您就会注意到顶部栏中的名称更改为组的名称和主机的名称，用正斜杠分隔。现在，您可以向组长发送命令，组中的其他打印机也将随之发送命令。

<img src={require('@site/docs/panda-series/panda-touch/img/add_group_ok.png').default} alt="" width="600" />

### 从USB打印的注意事项

尝试从USB打印时，请注意以下要点。

* 确保USB闪存驱动器的文件系统格式化为 `FAT32`。
* 使用`导出所有盘`选项从Bambu Studio或Orca Slicer导出`.3mf`文件。

    <img src={require('@site/docs/panda-series/panda-touch/img/export_3mf.png').default} alt="" width="300" />

* 将切好的 `.3mf` 文件写入USB储存设备的根目录

    * Panda Touch仅支持在Bambu Studio的`Build Plate#1`上切片的文件。
    * Panda Touch仅支持 `.3mf` 文件，不支持 `.gcode` 文件。
    * Panda Touch仅支持读取根目录中的文件，不支持读取文件夹中的文件。

* 将USB储存设备插入Panda Touch，然后转到`USB储存设备`菜单。

    <img src={require('@site/docs/panda-series/panda-touch/img/usb_flash_drive.png').default} alt="" width="600" />

### 使用一台打印机开始打印

* 点击以选择USB磁盘或SD卡上的文件进行打印。
* 设置打印参数。根据打印机的不同，您可能会看到：
    * `热床调平`
    * `流量校准` (`P1P` and `P1S` 没有这个功能, 因此这些打印机不会显示此选项)
    * `延时摄影`
    * `使用 AMS` (Panda Touch将自动识别此打印机是否已插入AMS，然后确定是否需要显示此选项)
    * `自动断电` (自动识别在线的Panda PWR,开启自动断电功能)
    * `清除用电量` (自动识别在线的Panda PWR,重置Panda PWR的用电量)

    <img src={require('@site/docs/panda-series/panda-touch/img/start_print_one.png').default} alt="" width="600" />

* 请确保切片的`.3mf`文件与所选打印机兼容。
* 如果使用AMS，请确保AMS托盘中的耗材与切片的`.3mf`文件中的耗材一致，因为在打印开始时无法动态映射耗材。

* 如果您从USB开始打印，则Panda Touch将开始将USB闪存驱动器中的文件上传到打印机MicroSD卡的根目录。为避免上传问题，请确保：
    1. 打印机中插入了MicroSD卡。
    2. MicroSD卡的剩余容量足以写入要上传的文件。

    <img src={require('@site/docs/panda-series/panda-touch/img/uploading.png').default} alt="" width="600" />

* 上传完成后，将开始打印。对于非常大的`.3mf`文件，传输到每台打印机可能需要几分钟的时间。

* 开始打印后，Panda Touch将自动跳转到主界面并显示打印机数据。

    <img src={require('@site/docs/panda-series/panda-touch/img/start_print_one_ing.png').default} alt="" width="600" />

### 组打印

* 仅支持存储在USB磁盘上的文件进行组打印。
* 点击以选择USB磁盘上要打印的文件。
* 设置打印参数。根据组中的打印机，可能会看到
    * `热床调平`
    * `流量校准` (`P1P`和`P1S`没有此功能，因此这些型号的打印机将不会显示此选项。)
    * `延时摄影`
    * `使用 AMS` (Panda Touch将自动识别此打印机是否已插入AMS，然后确定是否需要显示此选项。)
    * `自动断电` (自动识别在线的Panda PWR,开启自动断电功能)
    * `清除用电量`(自动识别在线的Panda PWR,重置Panda PWR的用电量)

* 特定组的复选框打印选项将基于组中功能最强大的机器可用的功能。例如，您正在使用包含X1C\P1P\P1S的组，您将有激光雷达扫描选项可用，但此选项将仅发送给支持它的组中的打印机。

    <img src={require('@site/docs/panda-series/panda-touch/img/start_print.png').default} alt="" width="600" />

* Panda Touch将生成一个可用打印机列表供您选择。
* 已忙的打印机和组将被排除在此列表之外。这意味着，如果组中的单个打印机已经繁忙，则您将无法打印到该组中的任何打印机。这允许组始终保持彼此同步。

* 请确保切片的`.3mf`文件与所选打印机兼容。
* 如果使用AMS，请确保AMS托盘中的耗材与切片的`.3mf`文件中的耗材一致，因为在打印开始时无法动态映射耗材。

* 如果使用AMS，请确保AMS托盘中的耗材与切片的`.3mf`文件中的耗材一致，因为无法动态传输。Panda Touch将开始将USB闪存驱动器中的文件上传到打印机MicroSD卡的根目录。为了避免上传问题，请确保在打印开始时绘制耗材:
    1. 打印机中插入了MicroSD卡。
    2. MicroSD卡的剩余容量足以写入要上传的文件。

    <img src={require('@site/docs/panda-series/panda-touch/img/udisk_upload.png').default} alt="" width="600" />


* 上传完成后，将开始打印。对于非常大的`.3mf`文件，传输到每台打印机可能需要几分钟的时间。

    <img src={require('@site/docs/panda-series/panda-touch/img/group_printing.png').default} alt="" width="600" />

* 开始打印后，您将被带到打印摘要页面，在该页面上，组中每个打印机的状态都在单独的卡片上进行了摘要。

### 组打印描述

当选择一个组并且组中的多台打印机正忙于打印时，Panda Touch将显示`多台打印`菜单，如下所示。

<img src={require('@site/docs/panda-series/panda-touch/img/multi_printing.png').default} alt="" width="600" />

此菜单中存在以下组控件：

1. 打开/关闭当前打印列表中打印机的腔室LED。
2. 停止当前打印列表中的所有打印作业。
3. 暂停/恢复当前打印列表中的所有打印作业。

### 组打印设置延时

在组打印时根据这个时间来进行延时，如果当前打印机加热完成或者时间到了，就发送打印任务到下一台。

<img src={require('@site/docs/panda-series/panda-touch/img/group_delay.png').default} alt="" width="600" />
