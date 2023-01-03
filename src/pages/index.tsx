import React, { useCallback, useEffect, useState } from 'react';
import { getTableLIst } from 'src/services/test/testService';
import { idProps } from '@/utils/commonInterface';

const Index: React.FC<idProps> = ({ id }) => {
  const [dataSource, setDataSource] = useState<any[]>();
  // 根据id获取数据
  const loadDetailInfo = useCallback(async () => {
    const { data } = await getTableLIst({ id: id });
    if (data) {
      setDataSource(data.dataSource || []);
    }
  }, [id]);

  useEffect(() => {
    loadDetailInfo();
  }, [id]);

  console.log(dataSource);
  return <div></div>;
};

export default Index;
