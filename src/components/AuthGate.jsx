import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  User,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Briefcase
} from 'lucide-react';
import {
  BRAND_CONFIG,
  AUTH_CONFIG,
  buildUserFromAuth
} from '../constants/marketplaceConfig';
import NebulaLogo from './NebulaLogo';

export default function AuthGate({ onAuthenticated }) {
  const { modes, tabs, labels, placeholders, accountTypes, quickAccounts } =
    AUTH_CONFIG;

  const [mode, setMode] = useState(modes.SIGN_IN);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState(accountTypes[0]);
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = mode === modes.SIGN_UP;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = buildUserFromAuth({
      name: isSignUp ? name : '',
      email,
      accountType
    });
    onAuthenticated(user);
  };

  const handleQuickLogin = (preset) => {
    const user = buildUserFromAuth({
      name: preset.name,
      email: preset.email,
      accountType: preset.accountType
    });
    onAuthenticated(user);
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        
        {/* Top Brand Lockup */}
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <NebulaLogo size="lg" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#FFFDF9]">
              {BRAND_CONFIG.name}
            </span>
          </div>
          <p className="text-[11px] text-[#D4BC92] tracking-widest uppercase font-light">
            {BRAND_CONFIG.tagline}
          </p>
        </div>

        {/* Glassmorphic Login / Sign-Up Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#110D1D]/80 border border-[#F3EAD8]/20 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
          
          {/* Celestial Pill & Title */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9]/10 border border-[#F3EAD8]/25 text-[10px] uppercase tracking-widest text-[#F3EAD8] mb-3">
              <Sparkles className="w-3 h-3 text-[#D4BC92]" />
              <span>{AUTH_CONFIG.badge}</span>
            </div>
            <h1 className="font-serif-celestial text-2xl sm:text-3xl font-normal text-[#FFFDF9]">
              {isSignUp ? AUTH_CONFIG.signUpTitle : AUTH_CONFIG.signInTitle}
            </h1>
            <p className="text-xs text-[#C9B89B] font-light mt-1 leading-relaxed">
              {AUTH_CONFIG.subtitle}
            </p>
          </div>

          {/* Sign In / Sign Up Mode Switcher */}
          <div className="grid grid-cols-2 p-1 rounded-xl bg-[#08070D]/90 border border-[#EFE7D8]/15 text-xs mb-6">
            <button
              type="button"
              onClick={() => setMode(modes.SIGN_IN)}
              className={`py-2 rounded-lg font-medium transition-all ${
                !isSignUp
                  ? 'bg-[#FFFDF9] text-[#08070D] font-semibold shadow-sm'
                  : 'text-[#C9B89B] hover:text-[#FFFDF9]'
              }`}
            >
              {tabs.signIn}
            </button>
            <button
              type="button"
              onClick={() => setMode(modes.SIGN_UP)}
              className={`py-2 rounded-lg font-medium transition-all ${
                isSignUp
                  ? 'bg-[#FFFDF9] text-[#08070D] font-semibold shadow-sm'
                  : 'text-[#C9B89B] hover:text-[#FFFDF9]'
              }`}
            >
              {tabs.signUp}
            </button>
          </div>

          {/* Main Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isSignUp && (
              <>
                <div>
                  <label className="block text-[#C9B89B] mb-1.5 font-medium">
                    {labels.name}
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-[#C9B89B] absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={placeholders.name}
                      className="w-full bg-[#08070D]/90 border border-[#EFE7D8]/20 focus:border-[#FFFDF9] rounded-xl pl-10 pr-3.5 py-2.5 text-[#FFFDF9] placeholder-[#C9B89B]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#C9B89B] mb-1.5 font-medium">
                    {labels.accountType}
                  </label>
                  <div className="relative flex items-center">
                    <Briefcase className="w-4 h-4 text-[#C9B89B] absolute left-3.5 pointer-events-none" />
                    <select
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                      className="w-full bg-[#08070D]/90 border border-[#EFE7D8]/20 focus:border-[#FFFDF9] rounded-xl pl-10 pr-3.5 py-2.5 text-[#FFFDF9] focus:outline-none transition-colors"
                    >
                      {accountTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#110D1D]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-[#C9B89B] mb-1.5 font-medium">
                {labels.email}
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-[#C9B89B] absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholders.email}
                  className="w-full bg-[#08070D]/90 border border-[#EFE7D8]/20 focus:border-[#FFFDF9] rounded-xl pl-10 pr-3.5 py-2.5 text-[#FFFDF9] placeholder-[#C9B89B]/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#C9B89B] mb-1.5 font-medium">
                {labels.password}
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-[#C9B89B] absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={placeholders.password}
                  className="w-full bg-[#08070D]/90 border border-[#EFE7D8]/20 focus:border-[#FFFDF9] rounded-xl pl-10 pr-10 py-2.5 text-[#FFFDF9] placeholder-[#C9B89B]/50 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[#C9B89B] hover:text-[#FFFDF9] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl special-glow-button font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              <span>
                {isSignUp ? AUTH_CONFIG.submitSignUpBtn : AUTH_CONFIG.submitSignInBtn}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 1-Click Quick Demo Access */}
          <div className="mt-6 pt-5 border-t border-[#EFE7D8]/15">
            <div className="text-[10px] uppercase tracking-wider text-[#C9B89B] text-center font-semibold mb-3">
              {AUTH_CONFIG.quickAccessLabel}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickAccounts.map((acc) => (
                <button
                  key={acc.id}
                  type="button"
                  onClick={() => handleQuickLogin(acc)}
                  className="p-2.5 rounded-xl bg-[#08070D]/70 border border-[#EFE7D8]/15 hover:border-[#FFFDF9]/50 hover:bg-[#FFFDF9]/5 text-left transition-all group cursor-pointer"
                >
                  <div className="text-xs font-semibold text-[#FFFDF9] group-hover:text-[#DFC08D] flex items-center justify-between">
                    <span>{acc.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#C9B89B] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] text-[#C9B89B]/80 font-light mt-0.5 truncate">
                    {acc.sublabel}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Security Footer Note */}
          <div className="mt-5 pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-center gap-1.5 text-[11px] text-emerald-300/90 font-light">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{AUTH_CONFIG.securityNote}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
