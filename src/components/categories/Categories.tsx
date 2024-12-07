import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Tree, theme } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import { Select, Space } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  


  const { useToken } = theme;
  

const Categories = () => {

  const [size, setSize] = useState<SizeType>('middle')


    const { token } = useToken();

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
      ];

    const treeData: DataNode[] = [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              children: [
                {
                  title: 'leaf',
                  key: '0-0-0-0',
                },
                {
                  title: 'leaf',
                  key: '0-0-0-1',
                },
                {
                  title: 'leaf',
                  key: '0-0-0-2',
                },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [
                {
                  title: 'leaf',
                  key: '0-0-1-0',
                },
              ],
            },
            {
              title: 'parent 1-2',
              key: '0-0-2',
              children: [
                {
                  title: 'leaf',
                  key: '0-0-2-0',
                },
                {
                  title: 'leaf',
                  key: '0-0-2-1',
                },
              ],
            },
          ],
        },
      ];

      const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
      };
    
      const menuStyle: React.CSSProperties = {
        boxShadow: 'none',
        
      };
      
     
      
      

    return (
        <div style={{ backgroundColor: "red"}}>


<Dropdown
      menu={{ items }} 
      trigger={['click']}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
      <Tree
      showLine
      
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
        <Button type="default"  size={size} shape="round">
            
            Categories
            {<DownOutlined />}
          </Button>
        
        </Space>
      </a>
    </Dropdown>





    
        
         
        </div>
        
    )
}

export default Categories