"use client";

import { Stack, Typography } from "@mui/material";
import { useOne, useShow, useMany, HttpError } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

interface IDesign {
  id: number;
  title: string;
}

export default function BlogPostShow() {
  const { queryResult } = useShow({
    meta: {
      select: "*, rel_posts_designs(post_id, design_id)",
    },
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: designsData, isLoading: designsLoading } = useMany<IDesign, HttpError>({
    resource: "designs",
    ids: !!record ? record?.rel_posts_designs.map(
      (item: { design_id: number; post_id: number }) => item.design_id
    ) : [],
  });

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <NumberField value={record?.id ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          {"Title"}
        </Typography>
        <TextField value={record?.title} />

        <Typography variant="body1" fontWeight="bold">
          {"Content"}
        </Typography>
        <MarkdownField value={record?.article_md} />

        <Typography variant="body1" fontWeight="bold">
          {"Designs"}
        </Typography>
        {!!designsLoading
          ? "Loading"
          : designsData?.data?.map((design) => {
              return <p key={design.id}>{design.title}</p>;
            })}
      </Stack>
    </Show>
  );
}
