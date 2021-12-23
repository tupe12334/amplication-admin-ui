import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClusterGroupTitle } from "../clusterGroup/ClusterGroupTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="clustergroup.id"
          reference="ClusterGroup"
          label="ClusterGroup"
        >
          <SelectInput optionText={ClusterGroupTitle} />
        </ReferenceInput>
        <TextInput label="link" source="link" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
