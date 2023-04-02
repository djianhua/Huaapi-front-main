import {PageContainer, ProForm, ProFormInstance, ProFormMoney, ProFormText, ProTable} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import {Badge, Card, Descriptions, List, message, Progress, Space, theme} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {listInterfaceInfoByPageUsingGET} from "@/services/huaapi-backend/interfaceInfoController";
import {getLoginUserUsingGET} from "@/services/huaapi-backend/userController";
import moment from "moment";

/**
 * 主页
 * @returns
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.UserVO>(0);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const formRef = useRef<API.UserVO>();

  const loadData = async () =>{
    setLoading(true)
    try {
      const res = await getLoginUserUsingGET();
      if (res){
        console.log(res)
        setData(res.data)
        message.success('请求成功');
      }
    }catch (error:any){
      message.error('请求失败' + error.message);
    }
    setLoading(false);
  }
  useEffect(() =>{
    loadData();
  },[])
  return (
    <PageContainer>
      <Card>
        {data ? (
          <Descriptions title={data.name} column={1} bordered={true}>
            <Descriptions.Item label="用户id">{data.id}</Descriptions.Item>
            <Descriptions.Item label="用户名">{data.userName}</Descriptions.Item>
            <Descriptions.Item label="用户头像">
              <div>
                <img src={data.userAvatar} height={"60px"} width={"55px"}></img>
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="用户简介">{data.userProfile}</Descriptions.Item>
            <Descriptions.Item label="用户权限">{data.userRole}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{moment(data.createTime).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
            {/*<Descriptions.Item label="更新时间">{moment(data.updateTime).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>*/}
          </Descriptions>
        ) : (
          <>用户信息请求失败</>
        )}
      </Card>
    </PageContainer>
  );
}

export default Index;
