import React from 'react';
import { Menu } from 'element-react';

function HeadMenu() {
    return (
        <div>
            <Menu
                theme="dark"
                defaultActive="1"
                mode="horizontal"
            >
                <Menu.Item index="1">处理中心</Menu.Item>
                <Menu.SubMenu index="2" title="我的工作台">
                    <Menu.Item index="2-1">选项1</Menu.Item>
                    <Menu.Item index="2-2">选项2</Menu.Item>
                    <Menu.Item index="2-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item index="3">订单管理</Menu.Item>
            </Menu>
        </div>
    );
}

export default HeadMenu;