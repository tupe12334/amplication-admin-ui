import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClusterGroupTitle } from "../clusterGroup/ClusterGroupTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
