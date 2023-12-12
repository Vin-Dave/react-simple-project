import { useLoaderData } from "react-router-dom";

import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
export function ProductsList() {
  const products = useLoaderData();
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products headerText="Swetry" products={products} />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
}
