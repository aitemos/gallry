import React, { FC, useEffect, useState } from 'react';
import { GiStaryu } from 'react-icons/gi';

import { Button, Input, SideBar } from '../styled-components/styledcomps';
// import { UploadForm } from "./uploadForm";
import { useUserContext } from './userContent';

export const Sidebar: FC = () => {
  const [opened, setIsOpened] = useState(false);
  const [width, setWidth] = useState('auto');
  const [color, setColor] = useState<string>('black');
  const { user, login, createUser, logout, userExists } = useUserContext();
  const id = 'sidebar';
  // const [uploadImage, {loading: mutationIsLoading}] = ({variables: {input: {id:"",src:"",text:""}}})
  // const result = uploadImage({variables: {input: {id:"", text: "", src:""}}})
  useEffect(() => {
    const size = window.document.body.offsetWidth;
    console.log(size);
    setWidth(`${size / 6}px`);
  }, [setWidth]);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  return (
    <SideBar isOpened={opened} Size={'auto'} color={color} id={`sidebar_${id}`}>
      {opened ? (
        <div>
          <GiStaryu onClick={() => setIsOpened((prev) => !prev)}></GiStaryu>
          {user ? (
            <div>USER: {user.user.email}
              <div>
                IMAGE UPLOAD
                <br />
                <b>Upload Image</b>
                <Input type="file"></Input>
                <br />
                <b>Image description</b>
                <Input type="text"></Input>
                <Button>Upload</Button>
              </div>
              <Button onClick={() => logout?.()}>Logout</Button>
            </div>
          ) : (
            <div>
              Login:
              <br />
              <label htmlFor="uname">
                <b>Username </b>
              </label>
              <Input
                type="text"
                placeholder="Enter Username"
                name="uname"
                id="uname"
                required
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <br />
              <label htmlFor="psw">
                <b>Password </b>
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value),
                    console.log(loginPassword);
                }}
              />
              <br />
              <Button onClick={() => login(loginEmail, loginPassword)}>
                Login
              </Button>
              <br />
              Sign up: <br />
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <Input
                type="text"
                placeholder="Enter Username"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              <br />
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
              <br />
              <Button
                type="button"
                onClick={() => createUser?.(registerEmail, registerPassword)}
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      ) : (
        <GiStaryu onClick={() => setIsOpened((prev) => !prev)}></GiStaryu>
      )}
    </SideBar>
  );
};
