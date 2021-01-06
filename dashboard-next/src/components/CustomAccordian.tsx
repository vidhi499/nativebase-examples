import { Box, Button, Icon, Link, Path, VStack } from "native-base";
import React from "react";

export default function CustomAccordian({ data }: any) {
  console.log(data, "data");
  return (
    <Box mt={-3} alignItems="end">
      <VStack space={2} ml={12}>
        {data.map((key: any, value: any) => {
          return (
            <Link
              key={value}
              color="black"
              fontWeight={400}
              fontFamily="sans-serif"
              fontSize={13}
              isUnderlined={false}
            >
              {key}
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
}
