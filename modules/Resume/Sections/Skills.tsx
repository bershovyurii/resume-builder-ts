import { Box } from "@chakra-ui/layout";
import React, { useMemo } from "react";
import DataRow from "../../../components/elements/DataRow";
import useSkillStore from "../../UserInput/Skills/store";
import { SkillDataObject } from "../../UserInput/Skills/types";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import Tags from "../components/Tags";
import TextItem from "../components/TextItem";
import TitleRow from "../components/TitleRow";

interface CategoriesProps {
  data: Array<SkillDataObject>;
}

const Categories: React.FC<CategoriesProps> = React.memo(({ data }) => (
  <>
    {data.map((item) => (
      <SectionContent key={item._id}>
        <DataRow>
          <TitleRow>{item.category}</TitleRow>
        </DataRow>
        <DataRow>
          <TextItem aria-label={`Skill List: ${item.category}`}>
            {item.skillsList.join(", ")}
          </TextItem>
        </DataRow>
      </SectionContent>
    ))}
  </>
));

const generateListFromCategories = (data: Array<SkillDataObject>) => {
  const list = [];
  data.map((obj) => obj.skillsList.map((item) => list.push(item)));
  return list;
};

const SkillsLayout = () => {
  const format = useSkillStore((state) => state.format);
  const data = useSkillStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const listfromCategories = useMemo(
    () => generateListFromCategories(data),
    [data]
  );

  return (
    <Box aria-label="Skills Layout" w="inherit">
      <SectionTitle>Skills</SectionTitle>
      {format === "CATEGORIES" ? (
        <Categories data={data} />
      ) : (
        <Tags list={listfromCategories} />
      )}
    </Box>
  );
};

export default SkillsLayout;
Categories.displayName = "Categories";
