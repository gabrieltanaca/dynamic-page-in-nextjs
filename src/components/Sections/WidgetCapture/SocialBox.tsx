import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import GoogleIcon from '@/assets/icons/GoogleIcon';
import UI from '@/components/UI';
import Divider from '@/components/UI/Divider';
import React from 'react';

const ButtonIcons = {
  Facebook: { bgColor: '#1877F2', color: '#FFF', icon: <FacebookIcon fill={'#FFF'} /> },
  Google: { bgColor: '#FFF', color: 'default', icon: <GoogleIcon /> },
};

type ButtonIconsKey = keyof typeof ButtonIcons;

interface SocialBoxProps {
  properties: string[];
}

const SocialBox = ({ properties }: SocialBoxProps) => {
  return (
    <div className="py-8">
      <p className="pb-4 text-base">Cadastre-se com sua rede social:</p>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        {properties.map(social => {
          const Icon = ButtonIcons?.[social as ButtonIconsKey];
          return (
            <UI.Button
              title={social}
              icon={Icon?.icon || <div />}
              style={{
                backgroundColor: `${Icon?.bgColor}`,
                color: `${Icon?.color}`,
              }}
            />
          );
        })}
      </div>
      <Divider>OU</Divider>
      <div className="w-full flex justify-center items-end gap-4 pt-4">
        <UI.Input
          label="Seu e-mail:"
          placeholder="seu@email.com"
          type="text"
        />
        <UI.Button
          title="Próximo"
          className="border-none "
          icon={<ChevronRightIcon />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default SocialBox;