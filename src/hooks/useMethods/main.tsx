/*
 * @data: now
 */
import React from 'react';
import {Switch, Row, Col} from 'antd';
import 'antd/dist/antd.min.css';
import {useMethods} from '@huse/methods';
export  const MethodDemo = () => {
    const userMethods = {
        asAdmin(user: { role: string; history: string[]; }) {
            user.role = 'admin';
            user.history.push('change to admin');
        },
        asUser(user: { role: string; history: string[]; }) {
            user.role = 'uesr';
            user.history.push('change to user');
        },
        enable(user: { enabled: boolean; history: string[]; }) {
            user.enabled = true;
            user.history.push('disabled');
        },
        disable(user: { enabled: boolean; history: string[]; }) {
            user.enabled = false;
            user.history.push('enabled');
        },
    };
    const [user, methods] = useMethods(
        userMethods,
        {role: 'user', enabled: true, history: []}
    );
    return (
        <>
            <Row>
                <Col span={2}>
                    Admin: <Switch checked={user.role === 'admin'} onChange={user.role === 'admin' ? methods.asUser : methods.asAdmin} />
                </Col>
                <Col span={2}>
                    Enabled: <Switch checked={user.enabled} onChange={user.enabled ? methods.disable : methods.enable} />
                </Col>
            </Row>
            <div style={{marginTop: 30}}>Mutation history:</div>
            <ul>
                {user.history.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </>
    );
};