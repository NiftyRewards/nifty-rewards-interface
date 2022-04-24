import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

import { useState } from "react";
import DatePicker from "components/date-picker";
import router from "next/router";

const ListCard = () => {
  return (
    <HStack w="full" p="4" layerStyle="solid-card" justify="space-between">
      <Avatar
        bgColor="transparent"
        size="lg"
        name="Logos"
        src="/assets/ADIDAS.png"
      />
      <Text>Bored Ape</Text>
      <VStack>
        <Text fontSize="small">10.000</Text>
        <Text color="gray.200" fontSize="small">
          Supply
        </Text>
      </VStack>
      <VStack>
        <Text fontSize="small">6.400</Text>
        <Text color="gray.200" fontSize="small">
          Owners
        </Text>
      </VStack>
    </HStack>
  );
};

const Datepicker = ({ errors, register }) => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (newDate) => {
    console.log("on Change", newDate);
    setStartDate(newDate);
  };

  return (
    <FormControl isInvalid={errors.startdate}>
      <FormLabel htmlFor="startdate">start date of campaign</FormLabel>
      <DatePicker
        id="startdate"
        placeholder="startdate"
        {...register("startdate", {
          minLength: {
            value: 4,
            message: "Minimum length should be 4",
          },
        })}
        selectedDate={startDate}
        onChange={onChange}
        showPopperArrow={true}
      />
      {/* <FormHelperText>Date this widget was published</FormHelperText> */}
      <FormErrorMessage>
        {errors.startdate && errors.startdate.message}
      </FormErrorMessage>
    </FormControl>
  );
};

const CreateCampaign = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        router.push('/userhome')
      }, 3000);
    });
  }

  return (
    <VStack>
      <Heading pt="8">Create new campaign</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack
          w="full"
          layerStyle="solid-card"
          justify="space-between"
          align="start"
          spacing={8}
        >
          <VStack w="full" spacing={4}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">campaign name</FormLabel>
              <Input
                id="name"
                placeholder="name"
                {...register("name", {
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <Datepicker errors={errors} register={register} />

            <FormControl isInvalid={errors.enddate}>
              <FormLabel htmlFor="enddate">end date of campaign</FormLabel>
              <Input
                id="enddate"
                placeholder="enddate"
                {...register("enddate", {
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.enddate && errors.enddate.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.rewards}>
              <FormLabel htmlFor="rewards">rewards</FormLabel>
              <Input
                id="rewards"
                placeholder="rewards"
                {...register("rewards", {
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.rewards && errors.rewards.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <Controller
                name="checkboxes"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CheckboxGroup {...rest}>
                    <Checkbox value="accepted">
                      by clicking on submit, i agree to the terms and conditions
                      set out by niftyrewards...
                    </Checkbox>
                    {/* <Checkbox value="second">second</Checkbox>
                    <Checkbox value="last">last</Checkbox> */}
                  </CheckboxGroup>
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Please select at least one",
                  },
                }}
              />
              <FormErrorMessage>{errors.checkboxes?.message}</FormErrorMessage>
            </FormControl>

            <Button mt={4} isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </VStack>

          <VStack w="full">
            <FormControl id={"select"} isInvalid={errors.select}>
              <FormLabel>Select</FormLabel>

              <Select
                // selectedOptionStyle="check"
                name={"select"}
                // ref={ref}
                // onChange={onChange}
                // onBlur={onBlur}
                // value={value}
                // {...props}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <FormErrorMessage>
                {errors.select && errors.select.message}
              </FormErrorMessage>
            </FormControl>

            <Text color="primary.400"> Trending</Text>
            <ListCard />
            <ListCard />
            <ListCard />
          </VStack>
        </HStack>
      </form>
    </VStack>
  );
};

export default CreateCampaign;
