/** @format */

import { Card, Typography, Space, Row } from 'antd';
import type { ReactNode } from 'react';

interface CardComponentProps {
  title: string;
  icon: ReactNode;
  value: string;
  unit?: string;
  titleSuffix?: ReactNode | string;
  queueValue?: string;
  queueLabel?: string;
}

const CardComponent = ({
  title,
  icon,
  value,
  unit,
  queueValue = '',
  titleSuffix,
}: CardComponentProps) => {
  return (
    <Card
      size="small"
      styles={{
        body: {
          padding: '16px',
          height: '100%',
          minHeight: '100px',
        },
      }}>
      <Row justify={'space-between'}>
        <Space
          direction="vertical"
          style={{ width: '100%' }}
          size={12}>
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <Typography.Text
                type="secondary"
                style={{ fontSize: 14 }}>
                {title}
              </Typography.Text>
            </Space>
            {titleSuffix && (
              <Typography.Text
                type="secondary"
                style={{ fontSize: 14 }}>
                {titleSuffix}
              </Typography.Text>
            )}
          </Space>

          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space
              direction="horizontal"
              style={{ width: '100%' }}
              size={12}>
              <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{icon}</span>
              <Typography.Title
                level={3}
                style={{ margin: 0, fontSize: 20 }}>
                {value}
              </Typography.Title>
              {unit && (
                <Typography.Text
                  type="secondary"
                  style={{ fontSize: 14 }}>
                  {unit}
                </Typography.Text>
              )}
            </Space>

            {queueValue && (
              <Typography.Title
                level={3}
                style={{ margin: 0, fontSize: 20 }}>
                {queueValue}
              </Typography.Title>
            )}
          </Space>
        </Space>
      </Row>
    </Card>
  );
};

export default CardComponent;
