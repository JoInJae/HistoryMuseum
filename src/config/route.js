import React from "react";

const Main = React.lazy(() => import('../layout/main'));
const DataList = React.lazy(() => import('../layout/content/data_list'));
const CategoryList = React.lazy(() => import('../layout/content/data_management'));

const Info =[
    {
        "path":"/data/list",
        "layout":<Main title={"자료 관리"} content={<DataList />}/>
    },
    {
        "path":"/category/list",
        "layout":<Main title={"분류 관리"} content={<CategoryList />}/>
    }
]

export default Info;